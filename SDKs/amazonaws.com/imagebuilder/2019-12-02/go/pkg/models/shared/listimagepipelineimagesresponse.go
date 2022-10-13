package shared

type ListImagePipelineImagesResponse struct {
	ImageSummaryList []ImageSummary `json:"imageSummaryList"`
	NextToken        *string        `json:"nextToken"`
	RequestID        *string        `json:"requestId"`
}
