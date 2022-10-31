package shared



type ListTagsForResourceInput struct {
    NextToken *string `json:"NextToken,omitempty"`
    ResourceArn string `json:"ResourceArn"`
    
}

