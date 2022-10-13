package shared

type UpdateGameServerGroupInput struct {
	BalancingStrategy          *BalancingStrategyEnum          `json:"BalancingStrategy"`
	GameServerGroupName        string                          `json:"GameServerGroupName"`
	GameServerProtectionPolicy *GameServerProtectionPolicyEnum `json:"GameServerProtectionPolicy"`
	InstanceDefinitions        []InstanceDefinition            `json:"InstanceDefinitions"`
	RoleArn                    *string                         `json:"RoleArn"`
}
