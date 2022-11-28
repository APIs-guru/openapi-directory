package shared

// ScalableTargetAction
// Represents the minimum and maximum capacity for a scheduled action.
type ScalableTargetAction struct {
	MaxCapacity *int64 `json:"MaxCapacity,omitempty"`
	MinCapacity *int64 `json:"MinCapacity,omitempty"`
}
