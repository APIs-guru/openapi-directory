package shared



type GetDifferencesOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    Differences []Difference `json:"differences,omitempty"`
    
}

