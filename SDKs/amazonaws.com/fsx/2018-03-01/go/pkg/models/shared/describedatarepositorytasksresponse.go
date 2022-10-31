package shared



type DescribeDataRepositoryTasksResponse struct {
    DataRepositoryTasks []DataRepositoryTask `json:"DataRepositoryTasks,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

