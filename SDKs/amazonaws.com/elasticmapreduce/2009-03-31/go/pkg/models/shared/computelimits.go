package shared

type ComputeLimits struct {
	MaximumCapacityUnits         int64                     `json:"MaximumCapacityUnits"`
	MaximumCoreCapacityUnits     *int64                    `json:"MaximumCoreCapacityUnits"`
	MaximumOnDemandCapacityUnits *int64                    `json:"MaximumOnDemandCapacityUnits"`
	MinimumCapacityUnits         int64                     `json:"MinimumCapacityUnits"`
	UnitType                     ComputeLimitsUnitTypeEnum `json:"UnitType"`
}
