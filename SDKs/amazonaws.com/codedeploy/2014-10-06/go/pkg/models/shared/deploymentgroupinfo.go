package shared



type DeploymentGroupInfo struct {
    AlarmConfiguration *AlarmConfiguration `json:"alarmConfiguration,omitempty"`
    ApplicationName *string `json:"applicationName,omitempty"`
    AutoRollbackConfiguration *AutoRollbackConfiguration `json:"autoRollbackConfiguration,omitempty"`
    AutoScalingGroups []AutoScalingGroup `json:"autoScalingGroups,omitempty"`
    BlueGreenDeploymentConfiguration *BlueGreenDeploymentConfiguration `json:"blueGreenDeploymentConfiguration,omitempty"`
    ComputePlatform *ComputePlatformEnum `json:"computePlatform,omitempty"`
    DeploymentConfigName *string `json:"deploymentConfigName,omitempty"`
    DeploymentGroupID *string `json:"deploymentGroupId,omitempty"`
    DeploymentGroupName *string `json:"deploymentGroupName,omitempty"`
    DeploymentStyle *DeploymentStyle `json:"deploymentStyle,omitempty"`
    Ec2TagFilters []Ec2TagFilter `json:"ec2TagFilters,omitempty"`
    Ec2TagSet *Ec2TagSet `json:"ec2TagSet,omitempty"`
    EcsServices []EcsService `json:"ecsServices,omitempty"`
    LastAttemptedDeployment *LastDeploymentInfo `json:"lastAttemptedDeployment,omitempty"`
    LastSuccessfulDeployment *LastDeploymentInfo `json:"lastSuccessfulDeployment,omitempty"`
    LoadBalancerInfo *LoadBalancerInfo `json:"loadBalancerInfo,omitempty"`
    OnPremisesInstanceTagFilters []TagFilter `json:"onPremisesInstanceTagFilters,omitempty"`
    OnPremisesTagSet *OnPremisesTagSet `json:"onPremisesTagSet,omitempty"`
    OutdatedInstancesStrategy *OutdatedInstancesStrategyEnum `json:"outdatedInstancesStrategy,omitempty"`
    ServiceRoleArn *string `json:"serviceRoleArn,omitempty"`
    TargetRevision *RevisionLocation `json:"targetRevision,omitempty"`
    TriggerConfigurations []TriggerConfig `json:"triggerConfigurations,omitempty"`
    
}

