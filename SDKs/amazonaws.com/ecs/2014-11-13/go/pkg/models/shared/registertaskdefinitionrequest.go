package shared



type RegisterTaskDefinitionRequest struct {
    ContainerDefinitions []ContainerDefinition `json:"containerDefinitions"`
    CPU *string `json:"cpu,omitempty"`
    EphemeralStorage *EphemeralStorage `json:"ephemeralStorage,omitempty"`
    ExecutionRoleArn *string `json:"executionRoleArn,omitempty"`
    Family string `json:"family"`
    InferenceAccelerators []InferenceAccelerator `json:"inferenceAccelerators,omitempty"`
    IpcMode *IpcModeEnum `json:"ipcMode,omitempty"`
    Memory *string `json:"memory,omitempty"`
    NetworkMode *NetworkModeEnum `json:"networkMode,omitempty"`
    PidMode *PidModeEnum `json:"pidMode,omitempty"`
    PlacementConstraints []TaskDefinitionPlacementConstraint `json:"placementConstraints,omitempty"`
    ProxyConfiguration *ProxyConfiguration `json:"proxyConfiguration,omitempty"`
    RequiresCompatibilities []CompatibilityEnum `json:"requiresCompatibilities,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    TaskRoleArn *string `json:"taskRoleArn,omitempty"`
    Volumes []Volume `json:"volumes,omitempty"`
    
}

