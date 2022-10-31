package shared

type PlacementGroupConfig struct {
	InstanceRole      InstanceRoleTypeEnum        `json:"InstanceRole"`
	PlacementStrategy *PlacementGroupStrategyEnum `json:"PlacementStrategy,omitempty"`
}
