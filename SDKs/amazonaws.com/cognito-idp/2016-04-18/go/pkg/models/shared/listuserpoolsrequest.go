package shared



type ListUserPoolsRequest struct {
    MaxResults int64 `json:"MaxResults"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

