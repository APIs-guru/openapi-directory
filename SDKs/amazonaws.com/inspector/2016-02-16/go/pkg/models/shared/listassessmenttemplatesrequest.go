package shared



type ListAssessmentTemplatesRequest struct {
    AssessmentTargetArns []string `json:"assessmentTargetArns,omitempty"`
    Filter *AssessmentTemplateFilter `json:"filter,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

