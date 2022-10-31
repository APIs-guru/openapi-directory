package shared



type ListTagsForResourceResponse struct {
    ResourceArn *string `json:"ResourceArn,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

