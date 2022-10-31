package shared



type ListTagsForResourceRequest struct {
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceID string `json:"ResourceId"`
    
}

