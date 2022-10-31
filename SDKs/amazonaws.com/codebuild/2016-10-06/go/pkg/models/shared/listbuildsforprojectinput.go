package shared



type ListBuildsForProjectInput struct {
    NextToken *string `json:"nextToken,omitempty"`
    ProjectName string `json:"projectName"`
    SortOrder *SortOrderTypeEnum `json:"sortOrder,omitempty"`
    
}

