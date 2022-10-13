package shared

type DeploymentGroupInfo struct {
	AlarmConfiguration               *AlarmConfiguration               `json:"alarmConfiguration"`
	ApplicationName                  *string                           `json:"applicationName"`
	AutoRollbackConfiguration        *AutoRollbackConfiguration        `json:"autoRollbackConfiguration"`
	AutoScalingGroups                []AutoScalingGroup                `json:"autoScalingGroups"`
	BlueGreenDeploymentConfiguration *BlueGreenDeploymentConfiguration `json:"blueGreenDeploymentConfiguration"`
	ComputePlatform                  *ComputePlatformEnum              `json:"computePlatform"`
	DeploymentConfigName             *string                           `json:"deploymentConfigName"`
	DeploymentGroupID                *string                           `json:"deploymentGroupId"`
	DeploymentGroupName              *string                           `json:"deploymentGroupName"`
	DeploymentStyle                  *DeploymentStyle                  `json:"deploymentStyle"`
	Ec2TagFilters                    []Ec2TagFilter                    `json:"ec2TagFilters"`
	Ec2TagSet                        *Ec2TagSet                        `json:"ec2TagSet"`
	EcsServices                      []EcsService                      `json:"ecsServices"`
	LastAttemptedDeployment          *LastDeploymentInfo               `json:"lastAttemptedDeployment"`
	LastSuccessfulDeployment         *LastDeploymentInfo               `json:"lastSuccessfulDeployment"`
	LoadBalancerInfo                 *LoadBalancerInfo                 `json:"loadBalancerInfo"`
	OnPremisesInstanceTagFilters     []TagFilter                       `json:"onPremisesInstanceTagFilters"`
	OnPremisesTagSet                 *OnPremisesTagSet                 `json:"onPremisesTagSet"`
	OutdatedInstancesStrategy        *OutdatedInstancesStrategyEnum    `json:"outdatedInstancesStrategy"`
	ServiceRoleArn                   *string                           `json:"serviceRoleArn"`
	TargetRevision                   *RevisionLocation                 `json:"targetRevision"`
	TriggerConfigurations            []TriggerConfig                   `json:"triggerConfigurations"`
}
