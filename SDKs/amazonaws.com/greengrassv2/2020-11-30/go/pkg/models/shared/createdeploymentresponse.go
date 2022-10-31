package shared



type CreateDeploymentResponse struct {
    DeploymentID *string `json:"deploymentId,omitempty"`
    IotJobArn *string `json:"iotJobArn,omitempty"`
    IotJobID *string `json:"iotJobId,omitempty"`
    
}

