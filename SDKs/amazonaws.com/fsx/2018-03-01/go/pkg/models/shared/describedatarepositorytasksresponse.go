package shared

type DescribeDataRepositoryTasksResponse struct {
	DataRepositoryTasks []DataRepositoryTask `json:"DataRepositoryTasks"`
	NextToken           *string              `json:"NextToken"`
}
