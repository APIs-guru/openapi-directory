package shared

type ListTasksResponse struct {
	NextToken *string  `json:"nextToken,omitempty"`
	TaskArns  []string `json:"taskArns,omitempty"`
}
