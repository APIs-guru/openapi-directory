package shared



type DescribeReleaseLabelOutput struct {
    Applications []SimplifiedApplication `json:"Applications,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ReleaseLabel *string `json:"ReleaseLabel,omitempty"`
    
}

