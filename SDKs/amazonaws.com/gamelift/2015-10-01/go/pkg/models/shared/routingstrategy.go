package shared

type RoutingStrategy struct {
	FleetID *string                  `json:"FleetId"`
	Message *string                  `json:"Message"`
	Type    *RoutingStrategyTypeEnum `json:"Type"`
}
