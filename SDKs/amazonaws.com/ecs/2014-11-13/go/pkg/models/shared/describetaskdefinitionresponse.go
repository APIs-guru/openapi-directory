package shared

type DescribeTaskDefinitionResponse struct {
	Tags           []Tag           `json:"tags"`
	TaskDefinition *TaskDefinition `json:"taskDefinition"`
}
