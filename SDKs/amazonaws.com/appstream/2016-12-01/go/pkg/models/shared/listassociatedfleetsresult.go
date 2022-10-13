package shared

type ListAssociatedFleetsResult struct {
	Names     []string `json:"Names"`
	NextToken *string  `json:"NextToken"`
}
