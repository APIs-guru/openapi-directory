package shared

type DescribePendingAggregationRequestsResponse struct {
	NextToken                  *string                     `json:"NextToken,omitempty"`
	PendingAggregationRequests []PendingAggregationRequest `json:"PendingAggregationRequests,omitempty"`
}
