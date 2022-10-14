package shared

type DescribeAggregationAuthorizationsRequest struct {
	Limit     *int64  `json:"Limit,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
