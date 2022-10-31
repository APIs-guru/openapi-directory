package shared



type ListAssessmentsResponse struct {
    AssessmentMetadata []AssessmentMetadataItem `json:"assessmentMetadata,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

