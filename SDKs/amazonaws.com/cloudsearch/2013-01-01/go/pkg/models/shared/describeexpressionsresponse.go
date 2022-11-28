package shared

// DescribeExpressionsResponse
// The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.
type DescribeExpressionsResponse struct {
	Expressions []ExpressionStatus
}
