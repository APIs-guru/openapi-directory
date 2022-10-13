package shared

type RunTaskRequest struct {
	CapacityProviderStrategy []CapacityProviderStrategyItem `json:"capacityProviderStrategy"`
	Cluster                  *string                        `json:"cluster"`
	Count                    *int64                         `json:"count"`
	EnableEcsManagedTags     *bool                          `json:"enableECSManagedTags"`
	EnableExecuteCommand     *bool                          `json:"enableExecuteCommand"`
	Group                    *string                        `json:"group"`
	LaunchType               *LaunchTypeEnum                `json:"launchType"`
	NetworkConfiguration     *NetworkConfiguration          `json:"networkConfiguration"`
	Overrides                *TaskOverride                  `json:"overrides"`
	PlacementConstraints     []PlacementConstraint          `json:"placementConstraints"`
	PlacementStrategy        []PlacementStrategy            `json:"placementStrategy"`
	PlatformVersion          *string                        `json:"platformVersion"`
	PropagateTags            *PropagateTagsEnum             `json:"propagateTags"`
	ReferenceID              *string                        `json:"referenceId"`
	StartedBy                *string                        `json:"startedBy"`
	Tags                     []Tag                          `json:"tags"`
	TaskDefinition           string                         `json:"taskDefinition"`
}
