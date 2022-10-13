package shared

import (
	"time"
)

type DeploymentInfo struct {
	AdditionalDeploymentStatusInfo     *string                           `json:"additionalDeploymentStatusInfo"`
	ApplicationName                    *string                           `json:"applicationName"`
	AutoRollbackConfiguration          *AutoRollbackConfiguration        `json:"autoRollbackConfiguration"`
	BlueGreenDeploymentConfiguration   *BlueGreenDeploymentConfiguration `json:"blueGreenDeploymentConfiguration"`
	CompleteTime                       *time.Time                        `json:"completeTime"`
	ComputePlatform                    *ComputePlatformEnum              `json:"computePlatform"`
	CreateTime                         *time.Time                        `json:"createTime"`
	Creator                            *DeploymentCreatorEnum            `json:"creator"`
	DeploymentConfigName               *string                           `json:"deploymentConfigName"`
	DeploymentGroupName                *string                           `json:"deploymentGroupName"`
	DeploymentID                       *string                           `json:"deploymentId"`
	DeploymentOverview                 *DeploymentOverview               `json:"deploymentOverview"`
	DeploymentStatusMessages           []string                          `json:"deploymentStatusMessages"`
	DeploymentStyle                    *DeploymentStyle                  `json:"deploymentStyle"`
	Description                        *string                           `json:"description"`
	ErrorInformation                   *ErrorInformation                 `json:"errorInformation"`
	ExternalID                         *string                           `json:"externalId"`
	FileExistsBehavior                 *FileExistsBehaviorEnum           `json:"fileExistsBehavior"`
	IgnoreApplicationStopFailures      *bool                             `json:"ignoreApplicationStopFailures"`
	InstanceTerminationWaitTimeStarted *bool                             `json:"instanceTerminationWaitTimeStarted"`
	LoadBalancerInfo                   *LoadBalancerInfo                 `json:"loadBalancerInfo"`
	PreviousRevision                   *RevisionLocation                 `json:"previousRevision"`
	RelatedDeployments                 *RelatedDeployments               `json:"relatedDeployments"`
	Revision                           *RevisionLocation                 `json:"revision"`
	RollbackInfo                       *RollbackInfo                     `json:"rollbackInfo"`
	StartTime                          *time.Time                        `json:"startTime"`
	Status                             *DeploymentStatusEnum             `json:"status"`
	TargetInstances                    *TargetInstances                  `json:"targetInstances"`
	UpdateOutdatedInstancesOnly        *bool                             `json:"updateOutdatedInstancesOnly"`
}
