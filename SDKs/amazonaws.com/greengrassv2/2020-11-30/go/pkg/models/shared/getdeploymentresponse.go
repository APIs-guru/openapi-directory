package shared

import (
	"time"
)

type GetDeploymentResponse struct {
	Components          map[string]ComponentDeploymentSpecification `json:"components,omitempty"`
	CreationTimestamp   *time.Time                                  `json:"creationTimestamp,omitempty"`
	DeploymentID        *string                                     `json:"deploymentId,omitempty"`
	DeploymentName      *string                                     `json:"deploymentName,omitempty"`
	DeploymentPolicies  *DeploymentPolicies                         `json:"deploymentPolicies,omitempty"`
	DeploymentStatus    *DeploymentStatusEnum                       `json:"deploymentStatus,omitempty"`
	IotJobArn           *string                                     `json:"iotJobArn,omitempty"`
	IotJobConfiguration *DeploymentIoTJobConfiguration              `json:"iotJobConfiguration,omitempty"`
	IotJobID            *string                                     `json:"iotJobId,omitempty"`
	IsLatestForTarget   *bool                                       `json:"isLatestForTarget,omitempty"`
	RevisionID          *string                                     `json:"revisionId,omitempty"`
	Tags                map[string]string                           `json:"tags,omitempty"`
	TargetArn           *string                                     `json:"targetArn,omitempty"`
}
