package shared




type DeploymentCreatorEnum string

const (
    DeploymentCreatorEnumUser DeploymentCreatorEnum = "user"
DeploymentCreatorEnumAutoscaling DeploymentCreatorEnum = "autoscaling"
DeploymentCreatorEnumCodeDeployRollback DeploymentCreatorEnum = "codeDeployRollback"
DeploymentCreatorEnumCodeDeploy DeploymentCreatorEnum = "CodeDeploy"
DeploymentCreatorEnumCodeDeployAutoUpdate DeploymentCreatorEnum = "CodeDeployAutoUpdate"
DeploymentCreatorEnumCloudFormation DeploymentCreatorEnum = "CloudFormation"
DeploymentCreatorEnumCloudFormationRollback DeploymentCreatorEnum = "CloudFormationRollback"
)


