package shared

type DescribePendingAggregationRequestsRequest struct {
	Limit     *int64  `json:"Limit,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
