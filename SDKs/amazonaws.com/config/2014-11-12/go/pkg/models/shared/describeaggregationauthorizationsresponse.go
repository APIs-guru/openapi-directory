package shared

type DescribeAggregationAuthorizationsResponse struct {
	AggregationAuthorizations []AggregationAuthorization `json:"AggregationAuthorizations,omitempty"`
	NextToken                 *string                    `json:"NextToken,omitempty"`
}
