package shared

import (
	"time"
)

type Task struct {
	Attachments           []Attachment           `json:"attachments,omitempty"`
	Attributes            []Attribute            `json:"attributes,omitempty"`
	AvailabilityZone      *string                `json:"availabilityZone,omitempty"`
	CapacityProviderName  *string                `json:"capacityProviderName,omitempty"`
	ClusterArn            *string                `json:"clusterArn,omitempty"`
	Connectivity          *ConnectivityEnum      `json:"connectivity,omitempty"`
	ConnectivityAt        *time.Time             `json:"connectivityAt,omitempty"`
	ContainerInstanceArn  *string                `json:"containerInstanceArn,omitempty"`
	Containers            []Container            `json:"containers,omitempty"`
	CPU                   *string                `json:"cpu,omitempty"`
	CreatedAt             *time.Time             `json:"createdAt,omitempty"`
	DesiredStatus         *string                `json:"desiredStatus,omitempty"`
	EnableExecuteCommand  *bool                  `json:"enableExecuteCommand,omitempty"`
	EphemeralStorage      *EphemeralStorage      `json:"ephemeralStorage,omitempty"`
	ExecutionStoppedAt    *time.Time             `json:"executionStoppedAt,omitempty"`
	Group                 *string                `json:"group,omitempty"`
	HealthStatus          *HealthStatusEnum      `json:"healthStatus,omitempty"`
	InferenceAccelerators []InferenceAccelerator `json:"inferenceAccelerators,omitempty"`
	LastStatus            *string                `json:"lastStatus,omitempty"`
	LaunchType            *LaunchTypeEnum        `json:"launchType,omitempty"`
	Memory                *string                `json:"memory,omitempty"`
	Overrides             *TaskOverride          `json:"overrides,omitempty"`
	PlatformVersion       *string                `json:"platformVersion,omitempty"`
	PullStartedAt         *time.Time             `json:"pullStartedAt,omitempty"`
	PullStoppedAt         *time.Time             `json:"pullStoppedAt,omitempty"`
	StartedAt             *time.Time             `json:"startedAt,omitempty"`
	StartedBy             *string                `json:"startedBy,omitempty"`
	StopCode              *TaskStopCodeEnum      `json:"stopCode,omitempty"`
	StoppedAt             *time.Time             `json:"stoppedAt,omitempty"`
	StoppedReason         *string                `json:"stoppedReason,omitempty"`
	StoppingAt            *time.Time             `json:"stoppingAt,omitempty"`
	Tags                  []Tag                  `json:"tags,omitempty"`
	TaskArn               *string                `json:"taskArn,omitempty"`
	TaskDefinitionArn     *string                `json:"taskDefinitionArn,omitempty"`
	Version               *int64                 `json:"version,omitempty"`
}
