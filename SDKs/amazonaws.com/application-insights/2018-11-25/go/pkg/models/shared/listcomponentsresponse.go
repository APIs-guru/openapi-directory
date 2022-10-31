package shared



type ListComponentsResponse struct {
    ApplicationComponentList []ApplicationComponent `json:"ApplicationComponentList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

