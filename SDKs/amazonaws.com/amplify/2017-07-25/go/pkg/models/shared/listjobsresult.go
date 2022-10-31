package shared



type ListJobsResult struct {
    JobSummaries []JobSummary `json:"jobSummaries"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

