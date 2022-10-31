package shared



type CreateDeploymentGroupInput struct {
    AlarmConfiguration *AlarmConfiguration `json:"alarmConfiguration,omitempty"`
    ApplicationName string `json:"applicationName"`
    AutoRollbackConfiguration *AutoRollbackConfiguration `json:"autoRollbackConfiguration,omitempty"`
    AutoScalingGroups []string `json:"autoScalingGroups,omitempty"`
    BlueGreenDeploymentConfiguration *BlueGreenDeploymentConfiguration `json:"blueGreenDeploymentConfiguration,omitempty"`
    DeploymentConfigName *string `json:"deploymentConfigName,omitempty"`
    DeploymentGroupName string `json:"deploymentGroupName"`
    DeploymentStyle *DeploymentStyle `json:"deploymentStyle,omitempty"`
    Ec2TagFilters []Ec2TagFilter `json:"ec2TagFilters,omitempty"`
    Ec2TagSet *Ec2TagSet `json:"ec2TagSet,omitempty"`
    EcsServices []EcsService `json:"ecsServices,omitempty"`
    LoadBalancerInfo *LoadBalancerInfo `json:"loadBalancerInfo,omitempty"`
    OnPremisesInstanceTagFilters []TagFilter `json:"onPremisesInstanceTagFilters,omitempty"`
    OnPremisesTagSet *OnPremisesTagSet `json:"onPremisesTagSet,omitempty"`
    OutdatedInstancesStrategy *OutdatedInstancesStrategyEnum `json:"outdatedInstancesStrategy,omitempty"`
    ServiceRoleArn string `json:"serviceRoleArn"`
    Tags []Tag `json:"tags,omitempty"`
    TriggerConfigurations []TriggerConfig `json:"triggerConfigurations,omitempty"`
    
}

