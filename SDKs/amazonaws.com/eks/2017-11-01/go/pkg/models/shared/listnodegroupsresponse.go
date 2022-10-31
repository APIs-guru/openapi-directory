package shared



type ListNodegroupsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Nodegroups []string `json:"nodegroups,omitempty"`
    
}

