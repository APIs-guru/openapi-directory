package shared

type RegisterTaskDefinitionResponse struct {
	Tags           []Tag           `json:"tags"`
	TaskDefinition *TaskDefinition `json:"taskDefinition"`
}
