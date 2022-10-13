package shared

import (
	"time"
)

type GetDeploymentResponse struct {
	Components          map[string]ComponentDeploymentSpecification `json:"components"`
	CreationTimestamp   *time.Time                                  `json:"creationTimestamp"`
	DeploymentID        *string                                     `json:"deploymentId"`
	DeploymentName      *string                                     `json:"deploymentName"`
	DeploymentPolicies  *DeploymentPolicies                         `json:"deploymentPolicies"`
	DeploymentStatus    *DeploymentStatusEnum                       `json:"deploymentStatus"`
	IotJobArn           *string                                     `json:"iotJobArn"`
	IotJobConfiguration *DeploymentIoTJobConfiguration              `json:"iotJobConfiguration"`
	IotJobID            *string                                     `json:"iotJobId"`
	IsLatestForTarget   *bool                                       `json:"isLatestForTarget"`
	RevisionID          *string                                     `json:"revisionId"`
	Tags                map[string]string                           `json:"tags"`
	TargetArn           *string                                     `json:"targetArn"`
}
