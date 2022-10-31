package shared

type ClaimGameServerInput struct {
	GameServerData      *string `json:"GameServerData,omitempty"`
	GameServerGroupName string  `json:"GameServerGroupName"`
	GameServerID        *string `json:"GameServerId,omitempty"`
}
