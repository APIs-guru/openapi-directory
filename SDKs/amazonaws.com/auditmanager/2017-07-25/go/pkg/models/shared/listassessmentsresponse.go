package shared

type ListAssessmentsResponse struct {
	AssessmentMetadata []AssessmentMetadataItem `json:"assessmentMetadata"`
	NextToken          *string                  `json:"nextToken"`
}
