package shared



type ListTaskExecutionsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    TaskArn *string `json:"TaskArn,omitempty"`
    
}

