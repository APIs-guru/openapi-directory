package shared



type ListImagesResponse struct {
    ImageVersionList []ImageVersion `json:"imageVersionList,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

