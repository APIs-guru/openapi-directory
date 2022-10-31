package shared



type ListAssessmentTargetsRequest struct {
    Filter *AssessmentTargetFilter `json:"filter,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

