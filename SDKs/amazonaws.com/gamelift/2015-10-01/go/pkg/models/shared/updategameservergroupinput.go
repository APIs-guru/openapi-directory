package shared

type UpdateGameServerGroupInput struct {
	BalancingStrategy          *BalancingStrategyEnum          `json:"BalancingStrategy,omitempty"`
	GameServerGroupName        string                          `json:"GameServerGroupName"`
	GameServerProtectionPolicy *GameServerProtectionPolicyEnum `json:"GameServerProtectionPolicy,omitempty"`
	InstanceDefinitions        []InstanceDefinition            `json:"InstanceDefinitions,omitempty"`
	RoleArn                    *string                         `json:"RoleArn,omitempty"`
}
