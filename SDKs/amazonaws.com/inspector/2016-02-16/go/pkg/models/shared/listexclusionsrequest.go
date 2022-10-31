package shared



type ListExclusionsRequest struct {
    AssessmentRunArn string `json:"assessmentRunArn"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

