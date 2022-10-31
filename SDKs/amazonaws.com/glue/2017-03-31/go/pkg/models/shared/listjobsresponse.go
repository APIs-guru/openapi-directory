package shared



type ListJobsResponse struct {
    JobNames []string `json:"JobNames,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

