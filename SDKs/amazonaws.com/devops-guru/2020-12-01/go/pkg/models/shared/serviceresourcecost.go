package shared

type ServiceResourceCost struct {
	Cost     *float64                                `json:"Cost"`
	Count    *int64                                  `json:"Count"`
	State    *CostEstimationServiceResourceStateEnum `json:"State"`
	Type     *string                                 `json:"Type"`
	UnitCost *float64                                `json:"UnitCost"`
}
