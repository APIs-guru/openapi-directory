package shared

type ListAssessmentFrameworksResponse struct {
	FrameworkMetadataList []AssessmentFrameworkMetadata `json:"frameworkMetadataList"`
	NextToken             *string                       `json:"nextToken"`
}
