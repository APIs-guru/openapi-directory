package shared

type ListNamedQueriesOutput struct {
	NamedQueryIds []string `json:"NamedQueryIds,omitempty"`
	NextToken     *string  `json:"NextToken,omitempty"`
}
