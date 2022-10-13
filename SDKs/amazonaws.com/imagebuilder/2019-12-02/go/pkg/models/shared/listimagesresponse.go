package shared

type ListImagesResponse struct {
	ImageVersionList []ImageVersion `json:"imageVersionList"`
	NextToken        *string        `json:"nextToken"`
	RequestID        *string        `json:"requestId"`
}
