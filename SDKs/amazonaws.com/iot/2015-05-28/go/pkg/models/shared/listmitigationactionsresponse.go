package shared

type ListMitigationActionsResponse struct {
	ActionIdentifiers []MitigationActionIdentifier `json:"actionIdentifiers"`
	NextToken         *string                      `json:"nextToken"`
}
