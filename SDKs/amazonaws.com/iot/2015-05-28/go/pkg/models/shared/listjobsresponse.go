package shared



type ListJobsResponse struct {
    Jobs []JobSummary `json:"jobs,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

