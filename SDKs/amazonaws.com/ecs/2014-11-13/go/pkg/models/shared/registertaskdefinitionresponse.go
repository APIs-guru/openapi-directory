package shared



type RegisterTaskDefinitionResponse struct {
    Tags []Tag `json:"tags,omitempty"`
    TaskDefinition *TaskDefinition `json:"taskDefinition,omitempty"`
    
}

