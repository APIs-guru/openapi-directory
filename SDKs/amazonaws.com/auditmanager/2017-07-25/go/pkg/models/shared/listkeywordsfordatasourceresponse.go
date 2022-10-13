package shared

type ListKeywordsForDataSourceResponse struct {
	Keywords  []string `json:"keywords"`
	NextToken *string  `json:"nextToken"`
}
