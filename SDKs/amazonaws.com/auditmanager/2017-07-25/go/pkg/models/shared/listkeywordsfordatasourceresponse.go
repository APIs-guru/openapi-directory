package shared



type ListKeywordsForDataSourceResponse struct {
    Keywords []string `json:"keywords,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

