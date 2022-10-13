package shared

type CreateDeploymentGroupInput struct {
	AlarmConfiguration               *AlarmConfiguration               `json:"alarmConfiguration"`
	ApplicationName                  string                            `json:"applicationName"`
	AutoRollbackConfiguration        *AutoRollbackConfiguration        `json:"autoRollbackConfiguration"`
	AutoScalingGroups                []string                          `json:"autoScalingGroups"`
	BlueGreenDeploymentConfiguration *BlueGreenDeploymentConfiguration `json:"blueGreenDeploymentConfiguration"`
	DeploymentConfigName             *string                           `json:"deploymentConfigName"`
	DeploymentGroupName              string                            `json:"deploymentGroupName"`
	DeploymentStyle                  *DeploymentStyle                  `json:"deploymentStyle"`
	Ec2TagFilters                    []Ec2TagFilter                    `json:"ec2TagFilters"`
	Ec2TagSet                        *Ec2TagSet                        `json:"ec2TagSet"`
	EcsServices                      []EcsService                      `json:"ecsServices"`
	LoadBalancerInfo                 *LoadBalancerInfo                 `json:"loadBalancerInfo"`
	OnPremisesInstanceTagFilters     []TagFilter                       `json:"onPremisesInstanceTagFilters"`
	OnPremisesTagSet                 *OnPremisesTagSet                 `json:"onPremisesTagSet"`
	OutdatedInstancesStrategy        *OutdatedInstancesStrategyEnum    `json:"outdatedInstancesStrategy"`
	ServiceRoleArn                   string                            `json:"serviceRoleArn"`
	Tags                             []Tag                             `json:"tags"`
	TriggerConfigurations            []TriggerConfig                   `json:"triggerConfigurations"`
}
