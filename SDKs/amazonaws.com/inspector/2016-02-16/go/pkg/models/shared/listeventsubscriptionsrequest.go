package shared



type ListEventSubscriptionsRequest struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ResourceArn *string `json:"resourceArn,omitempty"`
    
}

