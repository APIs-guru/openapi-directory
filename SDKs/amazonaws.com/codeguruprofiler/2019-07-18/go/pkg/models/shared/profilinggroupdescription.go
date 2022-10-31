package shared

import (
"time")

type ProfilingGroupDescription struct {
    AgentOrchestrationConfig *AgentOrchestrationConfig `json:"agentOrchestrationConfig,omitempty"`
    Arn *string `json:"arn,omitempty"`
    ComputePlatform *ComputePlatformEnum `json:"computePlatform,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Name *string `json:"name,omitempty"`
    ProfilingStatus *ProfilingStatus `json:"profilingStatus,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    
}

