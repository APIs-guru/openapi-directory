package shared



type ListBuildsInput struct {
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Status *BuildStatusEnum `json:"Status,omitempty"`
    
}

