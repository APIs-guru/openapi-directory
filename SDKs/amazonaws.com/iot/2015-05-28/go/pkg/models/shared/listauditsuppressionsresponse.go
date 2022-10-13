package shared

type ListAuditSuppressionsResponse struct {
	NextToken    *string            `json:"nextToken"`
	Suppressions []AuditSuppression `json:"suppressions"`
}
