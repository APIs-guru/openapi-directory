package shared

type RegisterGameServerInput struct {
	ConnectionInfo      *string `json:"ConnectionInfo,omitempty"`
	GameServerData      *string `json:"GameServerData,omitempty"`
	GameServerGroupName string  `json:"GameServerGroupName"`
	GameServerID        string  `json:"GameServerId"`
	InstanceID          string  `json:"InstanceId"`
}
