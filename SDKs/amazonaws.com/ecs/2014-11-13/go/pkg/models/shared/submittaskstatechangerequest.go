package shared

import (
	"time"
)

type SubmitTaskStateChangeRequest struct {
	Attachments        []AttachmentStateChange   `json:"attachments"`
	Cluster            *string                   `json:"cluster"`
	Containers         []ContainerStateChange    `json:"containers"`
	ExecutionStoppedAt *time.Time                `json:"executionStoppedAt"`
	ManagedAgents      []ManagedAgentStateChange `json:"managedAgents"`
	PullStartedAt      *time.Time                `json:"pullStartedAt"`
	PullStoppedAt      *time.Time                `json:"pullStoppedAt"`
	Reason             *string                   `json:"reason"`
	Status             *string                   `json:"status"`
	Task               *string                   `json:"task"`
}
