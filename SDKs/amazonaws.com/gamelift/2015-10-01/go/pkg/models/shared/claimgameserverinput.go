package shared

type ClaimGameServerInput struct {
	GameServerData      *string `json:"GameServerData"`
	GameServerGroupName string  `json:"GameServerGroupName"`
	GameServerID        *string `json:"GameServerId"`
}
