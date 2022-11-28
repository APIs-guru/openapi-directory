package shared

// ComputeLimits
//
//	The EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
type ComputeLimits struct {
	MaximumCapacityUnits         int64                     `json:"MaximumCapacityUnits"`
	MaximumCoreCapacityUnits     *int64                    `json:"MaximumCoreCapacityUnits,omitempty"`
	MaximumOnDemandCapacityUnits *int64                    `json:"MaximumOnDemandCapacityUnits,omitempty"`
	MinimumCapacityUnits         int64                     `json:"MinimumCapacityUnits"`
	UnitType                     ComputeLimitsUnitTypeEnum `json:"UnitType"`
}
