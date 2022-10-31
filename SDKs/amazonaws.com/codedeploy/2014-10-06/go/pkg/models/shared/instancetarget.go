package shared

import (
"time")

type InstanceTarget struct {
    DeploymentID *string `json:"deploymentId,omitempty"`
    InstanceLabel *TargetLabelEnum `json:"instanceLabel,omitempty"`
    LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
    LifecycleEvents []LifecycleEvent `json:"lifecycleEvents,omitempty"`
    Status *TargetStatusEnum `json:"status,omitempty"`
    TargetArn *string `json:"targetArn,omitempty"`
    TargetID *string `json:"targetId,omitempty"`
    
}

