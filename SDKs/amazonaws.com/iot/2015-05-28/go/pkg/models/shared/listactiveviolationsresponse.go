package shared



type ListActiveViolationsResponse struct {
    ActiveViolations []ActiveViolation `json:"activeViolations,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

