package shared



type ListRepositoriesInput struct {
    NextToken *string `json:"nextToken,omitempty"`
    Order *OrderEnumEnum `json:"order,omitempty"`
    SortBy *SortByEnumEnum `json:"sortBy,omitempty"`
    
}

