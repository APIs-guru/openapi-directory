package shared

type ComputeEnvironmentDetail struct {
	ComputeEnvironmentArn  string            `json:"computeEnvironmentArn"`
	ComputeEnvironmentName string            `json:"computeEnvironmentName"`
	ComputeResources       *ComputeResource  `json:"computeResources"`
	EcsClusterArn          string            `json:"ecsClusterArn"`
	ServiceRole            *string           `json:"serviceRole"`
	State                  *CeStateEnum      `json:"state"`
	Status                 *CeStatusEnum     `json:"status"`
	StatusReason           *string           `json:"statusReason"`
	Tags                   map[string]string `json:"tags"`
	Type                   *CeTypeEnum       `json:"type"`
}
