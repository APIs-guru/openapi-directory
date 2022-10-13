package shared

import (
	"time"
)

type LastDeploymentInfo struct {
	CreateTime   *time.Time            `json:"createTime"`
	DeploymentID *string               `json:"deploymentId"`
	EndTime      *time.Time            `json:"endTime"`
	Status       *DeploymentStatusEnum `json:"status"`
}
