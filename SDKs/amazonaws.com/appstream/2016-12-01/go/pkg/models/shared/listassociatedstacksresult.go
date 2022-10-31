package shared

type ListAssociatedStacksResult struct {
	Names     []string `json:"Names,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
