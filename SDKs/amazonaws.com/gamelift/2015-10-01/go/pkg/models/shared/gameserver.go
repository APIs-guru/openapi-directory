package shared

import (
	"time"
)

// GameServer
// <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Properties describing a game server that is running on an instance in a <a>GameServerGroup</a>. </p> <p>A game server is created by a successful call to <code>RegisterGameServer</code> and deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a game session by calling <code>ClaimGameServer</code>. </p> <p> <b>Related actions</b> </p> <p> <a>RegisterGameServer</a> | <a>ListGameServers</a> | <a>ClaimGameServer</a> | <a>DescribeGameServer</a> | <a>UpdateGameServer</a> | <a>DeregisterGameServer</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a> </p>
type GameServer struct {
	ClaimStatus         *GameServerClaimStatusEnum       `json:"ClaimStatus,omitempty"`
	ConnectionInfo      *string                          `json:"ConnectionInfo,omitempty"`
	GameServerData      *string                          `json:"GameServerData,omitempty"`
	GameServerGroupArn  *string                          `json:"GameServerGroupArn,omitempty"`
	GameServerGroupName *string                          `json:"GameServerGroupName,omitempty"`
	GameServerID        *string                          `json:"GameServerId,omitempty"`
	InstanceID          *string                          `json:"InstanceId,omitempty"`
	LastClaimTime       *time.Time                       `json:"LastClaimTime,omitempty"`
	LastHealthCheckTime *time.Time                       `json:"LastHealthCheckTime,omitempty"`
	RegistrationTime    *time.Time                       `json:"RegistrationTime,omitempty"`
	UtilizationStatus   *GameServerUtilizationStatusEnum `json:"UtilizationStatus,omitempty"`
}
