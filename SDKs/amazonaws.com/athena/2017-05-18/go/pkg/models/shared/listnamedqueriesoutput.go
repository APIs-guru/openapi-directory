package shared

type ListNamedQueriesOutput struct {
	NamedQueryIds []string `json:"NamedQueryIds"`
	NextToken     *string  `json:"NextToken"`
}
