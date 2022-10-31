package shared



type ListTagsForResourceInput struct {
    NextToken *string `json:"nextToken,omitempty"`
    ResourceArn string `json:"resourceArn"`
    
}

