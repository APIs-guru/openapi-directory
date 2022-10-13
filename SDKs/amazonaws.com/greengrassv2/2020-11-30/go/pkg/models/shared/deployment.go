package shared

import (
	"time"
)

type Deployment struct {
	CreationTimestamp *time.Time            `json:"creationTimestamp"`
	DeploymentID      *string               `json:"deploymentId"`
	DeploymentName    *string               `json:"deploymentName"`
	DeploymentStatus  *DeploymentStatusEnum `json:"deploymentStatus"`
	IsLatestForTarget *bool                 `json:"isLatestForTarget"`
	RevisionID        *string               `json:"revisionId"`
	TargetArn         *string               `json:"targetArn"`
}
