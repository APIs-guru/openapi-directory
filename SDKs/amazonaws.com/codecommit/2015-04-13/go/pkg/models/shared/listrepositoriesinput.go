package shared

type ListRepositoriesInput struct {
	NextToken *string         `json:"nextToken"`
	Order     *OrderEnumEnum  `json:"order"`
	SortBy    *SortByEnumEnum `json:"sortBy"`
}
