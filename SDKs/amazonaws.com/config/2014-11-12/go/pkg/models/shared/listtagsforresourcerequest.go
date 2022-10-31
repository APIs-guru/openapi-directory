package shared



type ListTagsForResourceRequest struct {
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceArn string `json:"ResourceArn"`
    
}

