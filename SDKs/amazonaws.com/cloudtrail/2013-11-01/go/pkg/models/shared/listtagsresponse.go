package shared



type ListTagsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ResourceTagList []ResourceTag `json:"ResourceTagList,omitempty"`
    
}

