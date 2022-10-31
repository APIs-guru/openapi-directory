package shared

import (
"time")

type TaskDefinition struct {
    Compatibilities []CompatibilityEnum `json:"compatibilities,omitempty"`
    ContainerDefinitions []ContainerDefinition `json:"containerDefinitions,omitempty"`
    CPU *string `json:"cpu,omitempty"`
    DeregisteredAt *time.Time `json:"deregisteredAt,omitempty"`
    EphemeralStorage *EphemeralStorage `json:"ephemeralStorage,omitempty"`
    ExecutionRoleArn *string `json:"executionRoleArn,omitempty"`
    Family *string `json:"family,omitempty"`
    InferenceAccelerators []InferenceAccelerator `json:"inferenceAccelerators,omitempty"`
    IpcMode *IpcModeEnum `json:"ipcMode,omitempty"`
    Memory *string `json:"memory,omitempty"`
    NetworkMode *NetworkModeEnum `json:"networkMode,omitempty"`
    PidMode *PidModeEnum `json:"pidMode,omitempty"`
    PlacementConstraints []TaskDefinitionPlacementConstraint `json:"placementConstraints,omitempty"`
    ProxyConfiguration *ProxyConfiguration `json:"proxyConfiguration,omitempty"`
    RegisteredAt *time.Time `json:"registeredAt,omitempty"`
    RegisteredBy *string `json:"registeredBy,omitempty"`
    RequiresAttributes []Attribute `json:"requiresAttributes,omitempty"`
    RequiresCompatibilities []CompatibilityEnum `json:"requiresCompatibilities,omitempty"`
    Revision *int64 `json:"revision,omitempty"`
    Status *TaskDefinitionStatusEnum `json:"status,omitempty"`
    TaskDefinitionArn *string `json:"taskDefinitionArn,omitempty"`
    TaskRoleArn *string `json:"taskRoleArn,omitempty"`
    Volumes []Volume `json:"volumes,omitempty"`
    
}

