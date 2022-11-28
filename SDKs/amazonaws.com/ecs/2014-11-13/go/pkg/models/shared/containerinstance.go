package shared

import (
	"time"
)

// ContainerInstance
// An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster.
type ContainerInstance struct {
	AgentConnected       *bool                  `json:"agentConnected,omitempty"`
	AgentUpdateStatus    *AgentUpdateStatusEnum `json:"agentUpdateStatus,omitempty"`
	Attachments          []Attachment           `json:"attachments,omitempty"`
	Attributes           []Attribute            `json:"attributes,omitempty"`
	CapacityProviderName *string                `json:"capacityProviderName,omitempty"`
	ContainerInstanceArn *string                `json:"containerInstanceArn,omitempty"`
	Ec2InstanceID        *string                `json:"ec2InstanceId,omitempty"`
	PendingTasksCount    *int64                 `json:"pendingTasksCount,omitempty"`
	RegisteredAt         *time.Time             `json:"registeredAt,omitempty"`
	RegisteredResources  []Resource             `json:"registeredResources,omitempty"`
	RemainingResources   []Resource             `json:"remainingResources,omitempty"`
	RunningTasksCount    *int64                 `json:"runningTasksCount,omitempty"`
	Status               *string                `json:"status,omitempty"`
	StatusReason         *string                `json:"statusReason,omitempty"`
	Tags                 []Tag                  `json:"tags,omitempty"`
	Version              *int64                 `json:"version,omitempty"`
	VersionInfo          *VersionInfo           `json:"versionInfo,omitempty"`
}
