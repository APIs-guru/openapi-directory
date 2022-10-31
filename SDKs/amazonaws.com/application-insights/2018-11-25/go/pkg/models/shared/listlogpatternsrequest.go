package shared



type ListLogPatternsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    PatternSetName *string `json:"PatternSetName,omitempty"`
    ResourceGroupName string `json:"ResourceGroupName"`
    
}

