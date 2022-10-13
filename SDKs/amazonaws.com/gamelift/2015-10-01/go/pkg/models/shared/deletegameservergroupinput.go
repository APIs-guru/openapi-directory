package shared

type DeleteGameServerGroupInput struct {
	DeleteOption        *GameServerGroupDeleteOptionEnum `json:"DeleteOption"`
	GameServerGroupName string                           `json:"GameServerGroupName"`
}
