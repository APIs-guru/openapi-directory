package shared



type DescribeImagesResult struct {
    Images []Image `json:"Images,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

