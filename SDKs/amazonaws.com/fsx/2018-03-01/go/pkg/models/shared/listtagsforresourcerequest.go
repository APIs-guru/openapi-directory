package shared



type ListTagsForResourceRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceArn string `json:"ResourceARN"`
    
}

