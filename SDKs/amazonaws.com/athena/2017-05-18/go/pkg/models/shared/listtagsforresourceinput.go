package shared



type ListTagsForResourceInput struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceArn string `json:"ResourceARN"`
    
}

