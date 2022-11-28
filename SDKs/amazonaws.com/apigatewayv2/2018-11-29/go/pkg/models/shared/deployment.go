package shared

import (
	"time"
)

// Deployment
// An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet.
type Deployment struct {
	AutoDeployed            *bool                 `json:"AutoDeployed,omitempty"`
	CreatedDate             *time.Time            `json:"CreatedDate,omitempty"`
	DeploymentID            *string               `json:"DeploymentId,omitempty"`
	DeploymentStatus        *DeploymentStatusEnum `json:"DeploymentStatus,omitempty"`
	DeploymentStatusMessage *string               `json:"DeploymentStatusMessage,omitempty"`
	Description             *string               `json:"Description,omitempty"`
}
