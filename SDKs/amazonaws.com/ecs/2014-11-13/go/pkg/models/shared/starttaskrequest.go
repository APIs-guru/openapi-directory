package shared

type StartTaskRequest struct {
	Cluster              *string               `json:"cluster"`
	ContainerInstances   []string              `json:"containerInstances"`
	EnableEcsManagedTags *bool                 `json:"enableECSManagedTags"`
	EnableExecuteCommand *bool                 `json:"enableExecuteCommand"`
	Group                *string               `json:"group"`
	NetworkConfiguration *NetworkConfiguration `json:"networkConfiguration"`
	Overrides            *TaskOverride         `json:"overrides"`
	PropagateTags        *PropagateTagsEnum    `json:"propagateTags"`
	ReferenceID          *string               `json:"referenceId"`
	StartedBy            *string               `json:"startedBy"`
	Tags                 []Tag                 `json:"tags"`
	TaskDefinition       string                `json:"taskDefinition"`
}
