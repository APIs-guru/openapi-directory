package shared

type StartTaskRequest struct {
	Cluster              *string               `json:"cluster,omitempty"`
	ContainerInstances   []string              `json:"containerInstances"`
	EnableEcsManagedTags *bool                 `json:"enableECSManagedTags,omitempty"`
	EnableExecuteCommand *bool                 `json:"enableExecuteCommand,omitempty"`
	Group                *string               `json:"group,omitempty"`
	NetworkConfiguration *NetworkConfiguration `json:"networkConfiguration,omitempty"`
	Overrides            *TaskOverride         `json:"overrides,omitempty"`
	PropagateTags        *PropagateTagsEnum    `json:"propagateTags,omitempty"`
	ReferenceID          *string               `json:"referenceId,omitempty"`
	StartedBy            *string               `json:"startedBy,omitempty"`
	Tags                 []Tag                 `json:"tags,omitempty"`
	TaskDefinition       string                `json:"taskDefinition"`
}
