package shared



type ListReleaseLabelsOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    ReleaseLabels []string `json:"ReleaseLabels,omitempty"`
    
}

