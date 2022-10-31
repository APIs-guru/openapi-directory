package shared



type DescribeTagsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Tags []ConfigurationTag `json:"tags,omitempty"`
    
}

