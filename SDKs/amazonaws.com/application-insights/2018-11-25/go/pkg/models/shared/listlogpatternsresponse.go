package shared



type ListLogPatternsResponse struct {
    LogPatterns []LogPattern `json:"LogPatterns,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceGroupName *string `json:"ResourceGroupName,omitempty"`
    
}

