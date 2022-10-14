package shared

type ListAuditFindingsResponse struct {
	Findings  []AuditFinding `json:"findings,omitempty"`
	NextToken *string        `json:"nextToken,omitempty"`
}
