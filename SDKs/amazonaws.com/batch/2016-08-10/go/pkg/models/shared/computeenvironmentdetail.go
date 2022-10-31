package shared

type ComputeEnvironmentDetail struct {
	ComputeEnvironmentArn  string            `json:"computeEnvironmentArn"`
	ComputeEnvironmentName string            `json:"computeEnvironmentName"`
	ComputeResources       *ComputeResource  `json:"computeResources,omitempty"`
	EcsClusterArn          string            `json:"ecsClusterArn"`
	ServiceRole            *string           `json:"serviceRole,omitempty"`
	State                  *CeStateEnum      `json:"state,omitempty"`
	Status                 *CeStatusEnum     `json:"status,omitempty"`
	StatusReason           *string           `json:"statusReason,omitempty"`
	Tags                   map[string]string `json:"tags,omitempty"`
	Type                   *CeTypeEnum       `json:"type,omitempty"`
}
