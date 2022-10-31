package shared



type ListLogPatternSetsResponse struct {
    LogPatternSets []string `json:"LogPatternSets,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceGroupName *string `json:"ResourceGroupName,omitempty"`
    
}

