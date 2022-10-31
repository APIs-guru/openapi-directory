package shared



type ListJobsResult struct {
    Jobs []Job `json:"jobs,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

