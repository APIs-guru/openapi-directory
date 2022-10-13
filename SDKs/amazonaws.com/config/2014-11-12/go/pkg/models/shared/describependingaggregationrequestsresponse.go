package shared

type DescribePendingAggregationRequestsResponse struct {
	NextToken                  *string                     `json:"NextToken"`
	PendingAggregationRequests []PendingAggregationRequest `json:"PendingAggregationRequests"`
}
