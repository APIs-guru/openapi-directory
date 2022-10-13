package shared

type GetCostEstimationResponse struct {
	Costs              []ServiceResourceCost                   `json:"Costs"`
	NextToken          *string                                 `json:"NextToken"`
	ResourceCollection *CostEstimationResourceCollectionFilter `json:"ResourceCollection"`
	Status             *CostEstimationStatusEnum               `json:"Status"`
	TimeRange          *CostEstimationTimeRange                `json:"TimeRange"`
	TotalCost          *float64                                `json:"TotalCost"`
}
