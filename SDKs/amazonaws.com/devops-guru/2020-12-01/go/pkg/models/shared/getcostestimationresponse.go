package shared



type GetCostEstimationResponse struct {
    Costs []ServiceResourceCost `json:"Costs,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceCollection *CostEstimationResourceCollectionFilter `json:"ResourceCollection,omitempty"`
    Status *CostEstimationStatusEnum `json:"Status,omitempty"`
    TimeRange *CostEstimationTimeRange `json:"TimeRange,omitempty"`
    TotalCost *float64 `json:"TotalCost,omitempty"`
    
}

