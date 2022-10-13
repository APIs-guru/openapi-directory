package shared

import (
	"time"
)

type GameServer struct {
	ClaimStatus         *GameServerClaimStatusEnum       `json:"ClaimStatus"`
	ConnectionInfo      *string                          `json:"ConnectionInfo"`
	GameServerData      *string                          `json:"GameServerData"`
	GameServerGroupArn  *string                          `json:"GameServerGroupArn"`
	GameServerGroupName *string                          `json:"GameServerGroupName"`
	GameServerID        *string                          `json:"GameServerId"`
	InstanceID          *string                          `json:"InstanceId"`
	LastClaimTime       *time.Time                       `json:"LastClaimTime"`
	LastHealthCheckTime *time.Time                       `json:"LastHealthCheckTime"`
	RegistrationTime    *time.Time                       `json:"RegistrationTime"`
	UtilizationStatus   *GameServerUtilizationStatusEnum `json:"UtilizationStatus"`
}
