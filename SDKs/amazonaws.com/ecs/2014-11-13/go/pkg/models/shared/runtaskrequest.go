package shared

type RunTaskRequest struct {
	CapacityProviderStrategy []CapacityProviderStrategyItem `json:"capacityProviderStrategy,omitempty"`
	Cluster                  *string                        `json:"cluster,omitempty"`
	Count                    *int64                         `json:"count,omitempty"`
	EnableEcsManagedTags     *bool                          `json:"enableECSManagedTags,omitempty"`
	EnableExecuteCommand     *bool                          `json:"enableExecuteCommand,omitempty"`
	Group                    *string                        `json:"group,omitempty"`
	LaunchType               *LaunchTypeEnum                `json:"launchType,omitempty"`
	NetworkConfiguration     *NetworkConfiguration          `json:"networkConfiguration,omitempty"`
	Overrides                *TaskOverride                  `json:"overrides,omitempty"`
	PlacementConstraints     []PlacementConstraint          `json:"placementConstraints,omitempty"`
	PlacementStrategy        []PlacementStrategy            `json:"placementStrategy,omitempty"`
	PlatformVersion          *string                        `json:"platformVersion,omitempty"`
	PropagateTags            *PropagateTagsEnum             `json:"propagateTags,omitempty"`
	ReferenceID              *string                        `json:"referenceId,omitempty"`
	StartedBy                *string                        `json:"startedBy,omitempty"`
	Tags                     []Tag                          `json:"tags,omitempty"`
	TaskDefinition           string                         `json:"taskDefinition"`
}
