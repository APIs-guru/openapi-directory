package shared

import (
"time")

type SubmitTaskStateChangeRequest struct {
    Attachments []AttachmentStateChange `json:"attachments,omitempty"`
    Cluster *string `json:"cluster,omitempty"`
    Containers []ContainerStateChange `json:"containers,omitempty"`
    ExecutionStoppedAt *time.Time `json:"executionStoppedAt,omitempty"`
    ManagedAgents []ManagedAgentStateChange `json:"managedAgents,omitempty"`
    PullStartedAt *time.Time `json:"pullStartedAt,omitempty"`
    PullStoppedAt *time.Time `json:"pullStoppedAt,omitempty"`
    Reason *string `json:"reason,omitempty"`
    Status *string `json:"status,omitempty"`
    Task *string `json:"task,omitempty"`
    
}

