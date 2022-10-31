package shared

import (
"time")

type Deployment struct {
    CreationTimestamp *time.Time `json:"creationTimestamp,omitempty"`
    DeploymentID *string `json:"deploymentId,omitempty"`
    DeploymentName *string `json:"deploymentName,omitempty"`
    DeploymentStatus *DeploymentStatusEnum `json:"deploymentStatus,omitempty"`
    IsLatestForTarget *bool `json:"isLatestForTarget,omitempty"`
    RevisionID *string `json:"revisionId,omitempty"`
    TargetArn *string `json:"targetArn,omitempty"`
    
}

