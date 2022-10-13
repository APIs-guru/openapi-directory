package shared

import (
	"time"
)

type EffectiveDeployment struct {
	CoreDeviceExecutionStatus EffectiveDeploymentExecutionStatusEnum `json:"coreDeviceExecutionStatus"`
	CreationTimestamp         time.Time                              `json:"creationTimestamp"`
	DeploymentID              string                                 `json:"deploymentId"`
	DeploymentName            string                                 `json:"deploymentName"`
	Description               *string                                `json:"description"`
	IotJobArn                 *string                                `json:"iotJobArn"`
	IotJobID                  *string                                `json:"iotJobId"`
	ModifiedTimestamp         time.Time                              `json:"modifiedTimestamp"`
	Reason                    *string                                `json:"reason"`
	TargetArn                 string                                 `json:"targetArn"`
}
