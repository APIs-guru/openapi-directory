package shared

import (
	"time"
)

// LastDeploymentInfo
// Information about the most recent attempted or successful deployment to a deployment group.
type LastDeploymentInfo struct {
	CreateTime   *time.Time            `json:"createTime,omitempty"`
	DeploymentID *string               `json:"deploymentId,omitempty"`
	EndTime      *time.Time            `json:"endTime,omitempty"`
	Status       *DeploymentStatusEnum `json:"status,omitempty"`
}
