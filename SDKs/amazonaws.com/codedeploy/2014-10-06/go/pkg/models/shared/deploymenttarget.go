package shared

type DeploymentTarget struct {
	CloudFormationTarget *CloudFormationTarget     `json:"cloudFormationTarget"`
	DeploymentTargetType *DeploymentTargetTypeEnum `json:"deploymentTargetType"`
	EcsTarget            *EcsTarget                `json:"ecsTarget"`
	InstanceTarget       *InstanceTarget           `json:"instanceTarget"`
	LambdaTarget         *LambdaTarget             `json:"lambdaTarget"`
}
