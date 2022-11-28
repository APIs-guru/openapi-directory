package shared

// ListArchiveRulesResponse
// The response to the request.
type ListArchiveRulesResponse struct {
	ArchiveRules []ArchiveRuleSummary `json:"archiveRules"`
	NextToken    *string              `json:"nextToken,omitempty"`
}
