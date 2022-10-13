package shared

type ListThingRegistrationTasksResponse struct {
	NextToken *string  `json:"nextToken"`
	TaskIds   []string `json:"taskIds"`
}
