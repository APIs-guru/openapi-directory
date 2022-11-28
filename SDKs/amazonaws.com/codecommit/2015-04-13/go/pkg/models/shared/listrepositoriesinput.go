package shared

// ListRepositoriesInput
// Represents the input of a list repositories operation.
type ListRepositoriesInput struct {
	NextToken *string         `json:"nextToken,omitempty"`
	Order     *OrderEnumEnum  `json:"order,omitempty"`
	SortBy    *SortByEnumEnum `json:"sortBy,omitempty"`
}
