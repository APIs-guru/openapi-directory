package shared



type CreateGameServerGroupInput struct {
    AutoScalingPolicy *GameServerGroupAutoScalingPolicy `json:"AutoScalingPolicy,omitempty"`
    BalancingStrategy *BalancingStrategyEnum `json:"BalancingStrategy,omitempty"`
    GameServerGroupName string `json:"GameServerGroupName"`
    GameServerProtectionPolicy *GameServerProtectionPolicyEnum `json:"GameServerProtectionPolicy,omitempty"`
    InstanceDefinitions []InstanceDefinition `json:"InstanceDefinitions"`
    LaunchTemplate LaunchTemplateSpecification `json:"LaunchTemplate"`
    MaxSize int64 `json:"MaxSize"`
    MinSize int64 `json:"MinSize"`
    RoleArn string `json:"RoleArn"`
    Tags []Tag `json:"Tags,omitempty"`
    VpcSubnets []string `json:"VpcSubnets,omitempty"`
    
}

