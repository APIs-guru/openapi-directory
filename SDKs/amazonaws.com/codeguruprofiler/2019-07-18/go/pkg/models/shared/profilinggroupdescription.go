package shared

import (
	"time"
)

type ProfilingGroupDescription struct {
	AgentOrchestrationConfig *AgentOrchestrationConfig `json:"agentOrchestrationConfig"`
	Arn                      *string                   `json:"arn"`
	ComputePlatform          *ComputePlatformEnum      `json:"computePlatform"`
	CreatedAt                *time.Time                `json:"createdAt"`
	Name                     *string                   `json:"name"`
	ProfilingStatus          *ProfilingStatus          `json:"profilingStatus"`
	Tags                     map[string]string         `json:"tags"`
	UpdatedAt                *time.Time                `json:"updatedAt"`
}
