package shared

import (
	"time"
)

type ContainerInstance struct {
	AgentConnected       *bool                  `json:"agentConnected"`
	AgentUpdateStatus    *AgentUpdateStatusEnum `json:"agentUpdateStatus"`
	Attachments          []Attachment           `json:"attachments"`
	Attributes           []Attribute            `json:"attributes"`
	CapacityProviderName *string                `json:"capacityProviderName"`
	ContainerInstanceArn *string                `json:"containerInstanceArn"`
	Ec2InstanceID        *string                `json:"ec2InstanceId"`
	PendingTasksCount    *int64                 `json:"pendingTasksCount"`
	RegisteredAt         *time.Time             `json:"registeredAt"`
	RegisteredResources  []Resource             `json:"registeredResources"`
	RemainingResources   []Resource             `json:"remainingResources"`
	RunningTasksCount    *int64                 `json:"runningTasksCount"`
	Status               *string                `json:"status"`
	StatusReason         *string                `json:"statusReason"`
	Tags                 []Tag                  `json:"tags"`
	Version              *int64                 `json:"version"`
	VersionInfo          *VersionInfo           `json:"versionInfo"`
}
