package shared

import (
	"time"
)

type DeploymentInfo struct {
	AdditionalDeploymentStatusInfo     *string                           `json:"additionalDeploymentStatusInfo,omitempty"`
	ApplicationName                    *string                           `json:"applicationName,omitempty"`
	AutoRollbackConfiguration          *AutoRollbackConfiguration        `json:"autoRollbackConfiguration,omitempty"`
	BlueGreenDeploymentConfiguration   *BlueGreenDeploymentConfiguration `json:"blueGreenDeploymentConfiguration,omitempty"`
	CompleteTime                       *time.Time                        `json:"completeTime,omitempty"`
	ComputePlatform                    *ComputePlatformEnum              `json:"computePlatform,omitempty"`
	CreateTime                         *time.Time                        `json:"createTime,omitempty"`
	Creator                            *DeploymentCreatorEnum            `json:"creator,omitempty"`
	DeploymentConfigName               *string                           `json:"deploymentConfigName,omitempty"`
	DeploymentGroupName                *string                           `json:"deploymentGroupName,omitempty"`
	DeploymentID                       *string                           `json:"deploymentId,omitempty"`
	DeploymentOverview                 *DeploymentOverview               `json:"deploymentOverview,omitempty"`
	DeploymentStatusMessages           []string                          `json:"deploymentStatusMessages,omitempty"`
	DeploymentStyle                    *DeploymentStyle                  `json:"deploymentStyle,omitempty"`
	Description                        *string                           `json:"description,omitempty"`
	ErrorInformation                   *ErrorInformation                 `json:"errorInformation,omitempty"`
	ExternalID                         *string                           `json:"externalId,omitempty"`
	FileExistsBehavior                 *FileExistsBehaviorEnum           `json:"fileExistsBehavior,omitempty"`
	IgnoreApplicationStopFailures      *bool                             `json:"ignoreApplicationStopFailures,omitempty"`
	InstanceTerminationWaitTimeStarted *bool                             `json:"instanceTerminationWaitTimeStarted,omitempty"`
	LoadBalancerInfo                   *LoadBalancerInfo                 `json:"loadBalancerInfo,omitempty"`
	PreviousRevision                   *RevisionLocation                 `json:"previousRevision,omitempty"`
	RelatedDeployments                 *RelatedDeployments               `json:"relatedDeployments,omitempty"`
	Revision                           *RevisionLocation                 `json:"revision,omitempty"`
	RollbackInfo                       *RollbackInfo                     `json:"rollbackInfo,omitempty"`
	StartTime                          *time.Time                        `json:"startTime,omitempty"`
	Status                             *DeploymentStatusEnum             `json:"status,omitempty"`
	TargetInstances                    *TargetInstances                  `json:"targetInstances,omitempty"`
	UpdateOutdatedInstancesOnly        *bool                             `json:"updateOutdatedInstancesOnly,omitempty"`
}
