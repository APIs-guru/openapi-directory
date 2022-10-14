package shared

type ComputeLimits struct {
	MaximumCapacityUnits         int64                     `json:"MaximumCapacityUnits"`
	MaximumCoreCapacityUnits     *int64                    `json:"MaximumCoreCapacityUnits,omitempty"`
	MaximumOnDemandCapacityUnits *int64                    `json:"MaximumOnDemandCapacityUnits,omitempty"`
	MinimumCapacityUnits         int64                     `json:"MinimumCapacityUnits"`
	UnitType                     ComputeLimitsUnitTypeEnum `json:"UnitType"`
}
