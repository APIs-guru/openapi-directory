package shared

type DescribeAggregationAuthorizationsResponse struct {
	AggregationAuthorizations []AggregationAuthorization `json:"AggregationAuthorizations"`
	NextToken                 *string                    `json:"NextToken"`
}
