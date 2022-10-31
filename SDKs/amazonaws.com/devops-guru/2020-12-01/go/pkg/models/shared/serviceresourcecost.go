package shared

type ServiceResourceCost struct {
	Cost     *float64                                `json:"Cost,omitempty"`
	Count    *int64                                  `json:"Count,omitempty"`
	State    *CostEstimationServiceResourceStateEnum `json:"State,omitempty"`
	Type     *string                                 `json:"Type,omitempty"`
	UnitCost *float64                                `json:"UnitCost,omitempty"`
}
