package shared



type ListAssessmentRunsRequest struct {
    AssessmentTemplateArns []string `json:"assessmentTemplateArns,omitempty"`
    Filter *AssessmentRunFilter `json:"filter,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

