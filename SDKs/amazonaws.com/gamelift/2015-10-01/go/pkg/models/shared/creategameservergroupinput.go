package shared

type CreateGameServerGroupInput struct {
	AutoScalingPolicy          *GameServerGroupAutoScalingPolicy `json:"AutoScalingPolicy"`
	BalancingStrategy          *BalancingStrategyEnum            `json:"BalancingStrategy"`
	GameServerGroupName        string                            `json:"GameServerGroupName"`
	GameServerProtectionPolicy *GameServerProtectionPolicyEnum   `json:"GameServerProtectionPolicy"`
	InstanceDefinitions        []InstanceDefinition              `json:"InstanceDefinitions"`
	LaunchTemplate             LaunchTemplateSpecification       `json:"LaunchTemplate"`
	MaxSize                    int64                             `json:"MaxSize"`
	MinSize                    int64                             `json:"MinSize"`
	RoleArn                    string                            `json:"RoleArn"`
	Tags                       []Tag                             `json:"Tags"`
	VpcSubnets                 []string                          `json:"VpcSubnets"`
}
