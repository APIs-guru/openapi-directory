package shared

import (
	"time"
)

type UpdateDeploymentResponse struct {
	AutoDeployed            *bool                 `json:"AutoDeployed,omitempty"`
	CreatedDate             *time.Time            `json:"CreatedDate,omitempty"`
	DeploymentID            *string               `json:"DeploymentId,omitempty"`
	DeploymentStatus        *DeploymentStatusEnum `json:"DeploymentStatus,omitempty"`
	DeploymentStatusMessage *string               `json:"DeploymentStatusMessage,omitempty"`
	Description             *string               `json:"Description,omitempty"`
}
