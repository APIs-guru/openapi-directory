package shared

type ListAssessmentFrameworksResponse struct {
	FrameworkMetadataList []AssessmentFrameworkMetadata `json:"frameworkMetadataList,omitempty"`
	NextToken             *string                       `json:"nextToken,omitempty"`
}
