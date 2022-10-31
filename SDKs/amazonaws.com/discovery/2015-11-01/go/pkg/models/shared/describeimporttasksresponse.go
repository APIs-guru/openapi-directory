package shared

type DescribeImportTasksResponse struct {
	NextToken *string      `json:"nextToken,omitempty"`
	Tasks     []ImportTask `json:"tasks,omitempty"`
}
