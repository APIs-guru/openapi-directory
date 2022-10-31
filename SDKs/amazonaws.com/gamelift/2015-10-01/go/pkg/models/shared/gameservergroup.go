package shared

import (
"time")

type GameServerGroup struct {
    AutoScalingGroupArn *string `json:"AutoScalingGroupArn,omitempty"`
    BalancingStrategy *BalancingStrategyEnum `json:"BalancingStrategy,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    GameServerGroupArn *string `json:"GameServerGroupArn,omitempty"`
    GameServerGroupName *string `json:"GameServerGroupName,omitempty"`
    GameServerProtectionPolicy *GameServerProtectionPolicyEnum `json:"GameServerProtectionPolicy,omitempty"`
    InstanceDefinitions []InstanceDefinition `json:"InstanceDefinitions,omitempty"`
    LastUpdatedTime *time.Time `json:"LastUpdatedTime,omitempty"`
    RoleArn *string `json:"RoleArn,omitempty"`
    Status *GameServerGroupStatusEnum `json:"Status,omitempty"`
    StatusReason *string `json:"StatusReason,omitempty"`
    SuspendedActions []GameServerGroupActionEnum `json:"SuspendedActions,omitempty"`
    
}

