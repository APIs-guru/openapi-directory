package shared

// DefineExpressionResponse
// The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.
type DefineExpressionResponse struct {
	Expression ExpressionStatus
}
