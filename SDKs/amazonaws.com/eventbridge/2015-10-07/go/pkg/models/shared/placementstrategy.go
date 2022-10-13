package shared

type PlacementStrategy struct {
	Field *string                    `json:"field"`
	Type  *PlacementStrategyTypeEnum `json:"type"`
}
