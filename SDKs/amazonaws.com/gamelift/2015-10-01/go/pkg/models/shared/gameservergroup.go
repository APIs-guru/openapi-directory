package shared

import (
	"time"
)

type GameServerGroup struct {
	AutoScalingGroupArn        *string                         `json:"AutoScalingGroupArn"`
	BalancingStrategy          *BalancingStrategyEnum          `json:"BalancingStrategy"`
	CreationTime               *time.Time                      `json:"CreationTime"`
	GameServerGroupArn         *string                         `json:"GameServerGroupArn"`
	GameServerGroupName        *string                         `json:"GameServerGroupName"`
	GameServerProtectionPolicy *GameServerProtectionPolicyEnum `json:"GameServerProtectionPolicy"`
	InstanceDefinitions        []InstanceDefinition            `json:"InstanceDefinitions"`
	LastUpdatedTime            *time.Time                      `json:"LastUpdatedTime"`
	RoleArn                    *string                         `json:"RoleArn"`
	Status                     *GameServerGroupStatusEnum      `json:"Status"`
	StatusReason               *string                         `json:"StatusReason"`
	SuspendedActions           []GameServerGroupActionEnum     `json:"SuspendedActions"`
}
