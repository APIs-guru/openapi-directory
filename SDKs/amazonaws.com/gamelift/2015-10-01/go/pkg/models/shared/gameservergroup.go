package shared

import (
	"time"
)

// GameServerGroup
// <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Properties that describe a game server group resource. A game server group manages certain properties related to a corresponding EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <code>CreateGameServerGroup</code> and deleted by calling <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily suspended and resumed by calling <code>SuspendGameServerGroup</code> and <code>ResumeGameServerGroup</code>, respectively. </p> <p> <b>Related actions</b> </p> <p> <a>CreateGameServerGroup</a> | <a>ListGameServerGroups</a> | <a>DescribeGameServerGroup</a> | <a>UpdateGameServerGroup</a> | <a>DeleteGameServerGroup</a> | <a>ResumeGameServerGroup</a> | <a>SuspendGameServerGroup</a> | <a>DescribeGameServerInstances</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a> </p>
type GameServerGroup struct {
	AutoScalingGroupArn        *string                         `json:"AutoScalingGroupArn,omitempty"`
	BalancingStrategy          *BalancingStrategyEnum          `json:"BalancingStrategy,omitempty"`
	CreationTime               *time.Time                      `json:"CreationTime,omitempty"`
	GameServerGroupArn         *string                         `json:"GameServerGroupArn,omitempty"`
	GameServerGroupName        *string                         `json:"GameServerGroupName,omitempty"`
	GameServerProtectionPolicy *GameServerProtectionPolicyEnum `json:"GameServerProtectionPolicy,omitempty"`
	InstanceDefinitions        []InstanceDefinition            `json:"InstanceDefinitions,omitempty"`
	LastUpdatedTime            *time.Time                      `json:"LastUpdatedTime,omitempty"`
	RoleArn                    *string                         `json:"RoleArn,omitempty"`
	Status                     *GameServerGroupStatusEnum      `json:"Status,omitempty"`
	StatusReason               *string                         `json:"StatusReason,omitempty"`
	SuspendedActions           []GameServerGroupActionEnum     `json:"SuspendedActions,omitempty"`
}
