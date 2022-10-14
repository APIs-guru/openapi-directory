package shared

type PlacementStrategy struct {
	Field *string                    `json:"field,omitempty"`
	Type  *PlacementStrategyTypeEnum `json:"type,omitempty"`
}
