package shared



type DescribeTaskDefinitionResponse struct {
    Tags []Tag `json:"tags,omitempty"`
    TaskDefinition *TaskDefinition `json:"taskDefinition,omitempty"`
    
}

