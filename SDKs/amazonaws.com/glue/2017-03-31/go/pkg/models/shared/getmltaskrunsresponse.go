package shared



type GetMlTaskRunsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    TaskRuns []TaskRun `json:"TaskRuns,omitempty"`
    
}

