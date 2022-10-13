package shared

type EcsParameters struct {
	CapacityProviderStrategy []CapacityProviderStrategyItem `json:"CapacityProviderStrategy"`
	EnableEcsManagedTags     *bool                          `json:"EnableECSManagedTags"`
	EnableExecuteCommand     *bool                          `json:"EnableExecuteCommand"`
	Group                    *string                        `json:"Group"`
	LaunchType               *LaunchTypeEnum                `json:"LaunchType"`
	NetworkConfiguration     *NetworkConfiguration          `json:"NetworkConfiguration"`
	PlacementConstraints     []PlacementConstraint          `json:"PlacementConstraints"`
	PlacementStrategy        []PlacementStrategy            `json:"PlacementStrategy"`
	PlatformVersion          *string                        `json:"PlatformVersion"`
	PropagateTags            *PropagateTagsEnum             `json:"PropagateTags"`
	ReferenceID              *string                        `json:"ReferenceId"`
	Tags                     []Tag                          `json:"Tags"`
	TaskCount                *int64                         `json:"TaskCount"`
	TaskDefinitionArn        string                         `json:"TaskDefinitionArn"`
}
