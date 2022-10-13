package shared

import (
	"time"
)

type TaskDefinition struct {
	Compatibilities         []CompatibilityEnum                 `json:"compatibilities"`
	ContainerDefinitions    []ContainerDefinition               `json:"containerDefinitions"`
	CPU                     *string                             `json:"cpu"`
	DeregisteredAt          *time.Time                          `json:"deregisteredAt"`
	EphemeralStorage        *EphemeralStorage                   `json:"ephemeralStorage"`
	ExecutionRoleArn        *string                             `json:"executionRoleArn"`
	Family                  *string                             `json:"family"`
	InferenceAccelerators   []InferenceAccelerator              `json:"inferenceAccelerators"`
	IpcMode                 *IpcModeEnum                        `json:"ipcMode"`
	Memory                  *string                             `json:"memory"`
	NetworkMode             *NetworkModeEnum                    `json:"networkMode"`
	PidMode                 *PidModeEnum                        `json:"pidMode"`
	PlacementConstraints    []TaskDefinitionPlacementConstraint `json:"placementConstraints"`
	ProxyConfiguration      *ProxyConfiguration                 `json:"proxyConfiguration"`
	RegisteredAt            *time.Time                          `json:"registeredAt"`
	RegisteredBy            *string                             `json:"registeredBy"`
	RequiresAttributes      []Attribute                         `json:"requiresAttributes"`
	RequiresCompatibilities []CompatibilityEnum                 `json:"requiresCompatibilities"`
	Revision                *int64                              `json:"revision"`
	Status                  *TaskDefinitionStatusEnum           `json:"status"`
	TaskDefinitionArn       *string                             `json:"taskDefinitionArn"`
	TaskRoleArn             *string                             `json:"taskRoleArn"`
	Volumes                 []Volume                            `json:"volumes"`
}
