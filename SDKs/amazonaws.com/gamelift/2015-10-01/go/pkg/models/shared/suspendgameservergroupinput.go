package shared

type SuspendGameServerGroupInput struct {
	GameServerGroupName string                      `json:"GameServerGroupName"`
	SuspendActions      []GameServerGroupActionEnum `json:"SuspendActions"`
}
