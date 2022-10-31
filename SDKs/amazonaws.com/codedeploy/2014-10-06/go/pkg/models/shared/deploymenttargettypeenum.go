package shared




type DeploymentTargetTypeEnum string

const (
    DeploymentTargetTypeEnumInstanceTarget DeploymentTargetTypeEnum = "InstanceTarget"
DeploymentTargetTypeEnumLambdaTarget DeploymentTargetTypeEnum = "LambdaTarget"
DeploymentTargetTypeEnumEcsTarget DeploymentTargetTypeEnum = "ECSTarget"
DeploymentTargetTypeEnumCloudFormationTarget DeploymentTargetTypeEnum = "CloudFormationTarget"
)


