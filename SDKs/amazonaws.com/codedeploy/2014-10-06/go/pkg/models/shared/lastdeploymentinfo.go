package shared

import (
"time")

type LastDeploymentInfo struct {
    CreateTime *time.Time `json:"createTime,omitempty"`
    DeploymentID *string `json:"deploymentId,omitempty"`
    EndTime *time.Time `json:"endTime,omitempty"`
    Status *DeploymentStatusEnum `json:"status,omitempty"`
    
}

