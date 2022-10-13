package shared

import (
	"time"
)

type Deployment struct {
	AutoDeployed            *bool                 `json:"AutoDeployed"`
	CreatedDate             *time.Time            `json:"CreatedDate"`
	DeploymentID            *string               `json:"DeploymentId"`
	DeploymentStatus        *DeploymentStatusEnum `json:"DeploymentStatus"`
	DeploymentStatusMessage *string               `json:"DeploymentStatusMessage"`
	Description             *string               `json:"Description"`
}
