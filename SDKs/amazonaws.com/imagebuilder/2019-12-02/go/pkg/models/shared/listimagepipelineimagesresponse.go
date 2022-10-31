package shared



type ListImagePipelineImagesResponse struct {
    ImageSummaryList []ImageSummary `json:"imageSummaryList,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

