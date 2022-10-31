package shared



type ListProjectsInput struct {
    NextToken *string `json:"nextToken,omitempty"`
    SortBy *ProjectSortByTypeEnum `json:"sortBy,omitempty"`
    SortOrder *SortOrderTypeEnum `json:"sortOrder,omitempty"`
    
}

