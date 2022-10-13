package shared

type UpdateDeploymentGroupInput struct {
	AlarmConfiguration               *AlarmConfiguration               `json:"alarmConfiguration"`
	ApplicationName                  string                            `json:"applicationName"`
	AutoRollbackConfiguration        *AutoRollbackConfiguration        `json:"autoRollbackConfiguration"`
	AutoScalingGroups                []string                          `json:"autoScalingGroups"`
	BlueGreenDeploymentConfiguration *BlueGreenDeploymentConfiguration `json:"blueGreenDeploymentConfiguration"`
	CurrentDeploymentGroupName       string                            `json:"currentDeploymentGroupName"`
	DeploymentConfigName             *string                           `json:"deploymentConfigName"`
	DeploymentStyle                  *DeploymentStyle                  `json:"deploymentStyle"`
	Ec2TagFilters                    []Ec2TagFilter                    `json:"ec2TagFilters"`
	Ec2TagSet                        *Ec2TagSet                        `json:"ec2TagSet"`
	EcsServices                      []EcsService                      `json:"ecsServices"`
	LoadBalancerInfo                 *LoadBalancerInfo                 `json:"loadBalancerInfo"`
	NewDeploymentGroupName           *string                           `json:"newDeploymentGroupName"`
	OnPremisesInstanceTagFilters     []TagFilter                       `json:"onPremisesInstanceTagFilters"`
	OnPremisesTagSet                 *OnPremisesTagSet                 `json:"onPremisesTagSet"`
	OutdatedInstancesStrategy        *OutdatedInstancesStrategyEnum    `json:"outdatedInstancesStrategy"`
	ServiceRoleArn                   *string                           `json:"serviceRoleArn"`
	TriggerConfigurations            []TriggerConfig                   `json:"triggerConfigurations"`
}
