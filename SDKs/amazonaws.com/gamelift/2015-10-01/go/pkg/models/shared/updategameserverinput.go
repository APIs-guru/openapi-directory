package shared

type UpdateGameServerInput struct {
	GameServerData      *string                          `json:"GameServerData"`
	GameServerGroupName string                           `json:"GameServerGroupName"`
	GameServerID        string                           `json:"GameServerId"`
	HealthCheck         *GameServerHealthCheckEnum       `json:"HealthCheck"`
	UtilizationStatus   *GameServerUtilizationStatusEnum `json:"UtilizationStatus"`
}
