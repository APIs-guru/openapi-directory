package shared

type DescribeImportTasksResponse struct {
	NextToken *string      `json:"nextToken"`
	Tasks     []ImportTask `json:"tasks"`
}
