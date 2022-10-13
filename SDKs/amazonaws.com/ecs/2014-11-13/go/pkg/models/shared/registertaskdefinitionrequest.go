package shared

type RegisterTaskDefinitionRequest struct {
	ContainerDefinitions    []ContainerDefinition               `json:"containerDefinitions"`
	CPU                     *string                             `json:"cpu"`
	EphemeralStorage        *EphemeralStorage                   `json:"ephemeralStorage"`
	ExecutionRoleArn        *string                             `json:"executionRoleArn"`
	Family                  string                              `json:"family"`
	InferenceAccelerators   []InferenceAccelerator              `json:"inferenceAccelerators"`
	IpcMode                 *IpcModeEnum                        `json:"ipcMode"`
	Memory                  *string                             `json:"memory"`
	NetworkMode             *NetworkModeEnum                    `json:"networkMode"`
	PidMode                 *PidModeEnum                        `json:"pidMode"`
	PlacementConstraints    []TaskDefinitionPlacementConstraint `json:"placementConstraints"`
	ProxyConfiguration      *ProxyConfiguration                 `json:"proxyConfiguration"`
	RequiresCompatibilities []CompatibilityEnum                 `json:"requiresCompatibilities"`
	Tags                    []Tag                               `json:"tags"`
	TaskRoleArn             *string                             `json:"taskRoleArn"`
	Volumes                 []Volume                            `json:"volumes"`
}
