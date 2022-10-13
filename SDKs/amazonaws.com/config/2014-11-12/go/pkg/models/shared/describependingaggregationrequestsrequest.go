package shared

type DescribePendingAggregationRequestsRequest struct {
	Limit     *int64  `json:"Limit"`
	NextToken *string `json:"NextToken"`
}
