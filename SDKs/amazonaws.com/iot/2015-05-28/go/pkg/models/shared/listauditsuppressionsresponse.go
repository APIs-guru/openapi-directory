package shared

type ListAuditSuppressionsResponse struct {
	NextToken    *string            `json:"nextToken,omitempty"`
	Suppressions []AuditSuppression `json:"suppressions,omitempty"`
}
