package shared

import (
"time")

type GameServer struct {
    ClaimStatus *GameServerClaimStatusEnum `json:"ClaimStatus,omitempty"`
    ConnectionInfo *string `json:"ConnectionInfo,omitempty"`
    GameServerData *string `json:"GameServerData,omitempty"`
    GameServerGroupArn *string `json:"GameServerGroupArn,omitempty"`
    GameServerGroupName *string `json:"GameServerGroupName,omitempty"`
    GameServerID *string `json:"GameServerId,omitempty"`
    InstanceID *string `json:"InstanceId,omitempty"`
    LastClaimTime *time.Time `json:"LastClaimTime,omitempty"`
    LastHealthCheckTime *time.Time `json:"LastHealthCheckTime,omitempty"`
    RegistrationTime *time.Time `json:"RegistrationTime,omitempty"`
    UtilizationStatus *GameServerUtilizationStatusEnum `json:"UtilizationStatus,omitempty"`
    
}

