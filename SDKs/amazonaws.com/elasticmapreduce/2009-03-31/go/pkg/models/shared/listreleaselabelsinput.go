package shared



type ListReleaseLabelsInput struct {
    Filters *ReleaseLabelFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

