package shared



type ListReportsOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    Reports []string `json:"reports,omitempty"`
    
}

