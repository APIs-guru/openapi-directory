package shared

type ListTasksResponse struct {
	NextToken *string  `json:"nextToken"`
	TaskArns  []string `json:"taskArns"`
}
