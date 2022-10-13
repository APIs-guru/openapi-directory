package shared

type DescribeAggregationAuthorizationsRequest struct {
	Limit     *int64  `json:"Limit"`
	NextToken *string `json:"NextToken"`
}
