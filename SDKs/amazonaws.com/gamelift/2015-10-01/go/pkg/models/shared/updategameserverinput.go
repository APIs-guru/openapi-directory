package shared

type UpdateGameServerInput struct {
	GameServerData      *string                          `json:"GameServerData,omitempty"`
	GameServerGroupName string                           `json:"GameServerGroupName"`
	GameServerID        string                           `json:"GameServerId"`
	HealthCheck         *GameServerHealthCheckEnum       `json:"HealthCheck,omitempty"`
	UtilizationStatus   *GameServerUtilizationStatusEnum `json:"UtilizationStatus,omitempty"`
}
