package shared

import (
"time")

type EffectiveDeployment struct {
    CoreDeviceExecutionStatus EffectiveDeploymentExecutionStatusEnum `json:"coreDeviceExecutionStatus"`
    CreationTimestamp time.Time `json:"creationTimestamp"`
    DeploymentID string `json:"deploymentId"`
    DeploymentName string `json:"deploymentName"`
    Description *string `json:"description,omitempty"`
    IotJobArn *string `json:"iotJobArn,omitempty"`
    IotJobID *string `json:"iotJobId,omitempty"`
    ModifiedTimestamp time.Time `json:"modifiedTimestamp"`
    Reason *string `json:"reason,omitempty"`
    TargetArn string `json:"targetArn"`
    
}

