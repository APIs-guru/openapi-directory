package shared

import (
	"time"
)

type Task struct {
	Attachments           []Attachment           `json:"attachments"`
	Attributes            []Attribute            `json:"attributes"`
	AvailabilityZone      *string                `json:"availabilityZone"`
	CapacityProviderName  *string                `json:"capacityProviderName"`
	ClusterArn            *string                `json:"clusterArn"`
	Connectivity          *ConnectivityEnum      `json:"connectivity"`
	ConnectivityAt        *time.Time             `json:"connectivityAt"`
	ContainerInstanceArn  *string                `json:"containerInstanceArn"`
	Containers            []Container            `json:"containers"`
	CPU                   *string                `json:"cpu"`
	CreatedAt             *time.Time             `json:"createdAt"`
	DesiredStatus         *string                `json:"desiredStatus"`
	EnableExecuteCommand  *bool                  `json:"enableExecuteCommand"`
	EphemeralStorage      *EphemeralStorage      `json:"ephemeralStorage"`
	ExecutionStoppedAt    *time.Time             `json:"executionStoppedAt"`
	Group                 *string                `json:"group"`
	HealthStatus          *HealthStatusEnum      `json:"healthStatus"`
	InferenceAccelerators []InferenceAccelerator `json:"inferenceAccelerators"`
	LastStatus            *string                `json:"lastStatus"`
	LaunchType            *LaunchTypeEnum        `json:"launchType"`
	Memory                *string                `json:"memory"`
	Overrides             *TaskOverride          `json:"overrides"`
	PlatformVersion       *string                `json:"platformVersion"`
	PullStartedAt         *time.Time             `json:"pullStartedAt"`
	PullStoppedAt         *time.Time             `json:"pullStoppedAt"`
	StartedAt             *time.Time             `json:"startedAt"`
	StartedBy             *string                `json:"startedBy"`
	StopCode              *TaskStopCodeEnum      `json:"stopCode"`
	StoppedAt             *time.Time             `json:"stoppedAt"`
	StoppedReason         *string                `json:"stoppedReason"`
	StoppingAt            *time.Time             `json:"stoppingAt"`
	Tags                  []Tag                  `json:"tags"`
	TaskArn               *string                `json:"taskArn"`
	TaskDefinitionArn     *string                `json:"taskDefinitionArn"`
	Version               *int64                 `json:"version"`
}
