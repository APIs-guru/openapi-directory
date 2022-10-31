package shared



type ListTagsForResourceInput struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ResourceArn string `json:"resourceArn"`
    
}

