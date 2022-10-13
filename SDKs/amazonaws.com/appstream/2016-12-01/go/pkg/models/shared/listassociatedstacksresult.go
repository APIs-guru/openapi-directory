package shared

type ListAssociatedStacksResult struct {
	Names     []string `json:"Names"`
	NextToken *string  `json:"NextToken"`
}
