package shared



type DescribeImagesResponse struct {
    ImageDetails []ImageDetail `json:"imageDetails,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

