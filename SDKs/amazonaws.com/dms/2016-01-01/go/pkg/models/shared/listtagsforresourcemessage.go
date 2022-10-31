package shared



type ListTagsForResourceMessage struct {
    ResourceArn *string `json:"ResourceArn,omitempty"`
    ResourceArnList []string `json:"ResourceArnList,omitempty"`
    
}

