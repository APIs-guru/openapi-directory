package shared



type ListApplicationsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

