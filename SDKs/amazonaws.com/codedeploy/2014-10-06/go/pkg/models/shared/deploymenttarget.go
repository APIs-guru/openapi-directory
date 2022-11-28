package shared

// DeploymentTarget
//
//	Information about the deployment target.
type DeploymentTarget struct {
	CloudFormationTarget *CloudFormationTarget     `json:"cloudFormationTarget,omitempty"`
	DeploymentTargetType *DeploymentTargetTypeEnum `json:"deploymentTargetType,omitempty"`
	EcsTarget            *EcsTarget                `json:"ecsTarget,omitempty"`
	InstanceTarget       *InstanceTarget           `json:"instanceTarget,omitempty"`
	LambdaTarget         *LambdaTarget             `json:"lambdaTarget,omitempty"`
}
