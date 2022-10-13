package shared

type RegisterGameServerInput struct {
	ConnectionInfo      *string `json:"ConnectionInfo"`
	GameServerData      *string `json:"GameServerData"`
	GameServerGroupName string  `json:"GameServerGroupName"`
	GameServerID        string  `json:"GameServerId"`
	InstanceID          string  `json:"InstanceId"`
}
