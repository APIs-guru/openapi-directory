package shared

type ListAuditFindingsResponse struct {
	Findings  []AuditFinding `json:"findings"`
	NextToken *string        `json:"nextToken"`
}
