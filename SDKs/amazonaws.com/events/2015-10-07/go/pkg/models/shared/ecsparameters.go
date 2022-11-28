package shared

// EcsParameters
// The custom parameters to be used when the target is an Amazon ECS task.
type EcsParameters struct {
	CapacityProviderStrategy []CapacityProviderStrategyItem `json:"CapacityProviderStrategy,omitempty"`
	EnableEcsManagedTags     *bool                          `json:"EnableECSManagedTags,omitempty"`
	EnableExecuteCommand     *bool                          `json:"EnableExecuteCommand,omitempty"`
	Group                    *string                        `json:"Group,omitempty"`
	LaunchType               *LaunchTypeEnum                `json:"LaunchType,omitempty"`
	NetworkConfiguration     *NetworkConfiguration          `json:"NetworkConfiguration,omitempty"`
	PlacementConstraints     []PlacementConstraint          `json:"PlacementConstraints,omitempty"`
	PlacementStrategy        []PlacementStrategy            `json:"PlacementStrategy,omitempty"`
	PlatformVersion          *string                        `json:"PlatformVersion,omitempty"`
	PropagateTags            *PropagateTagsEnum             `json:"PropagateTags,omitempty"`
	ReferenceID              *string                        `json:"ReferenceId,omitempty"`
	Tags                     []Tag                          `json:"Tags,omitempty"`
	TaskCount                *int64                         `json:"TaskCount,omitempty"`
	TaskDefinitionArn        string                         `json:"TaskDefinitionArn"`
}
