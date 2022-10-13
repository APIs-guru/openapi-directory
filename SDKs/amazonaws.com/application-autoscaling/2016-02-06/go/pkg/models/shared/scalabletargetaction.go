package shared

type ScalableTargetAction struct {
	MaxCapacity *int64 `json:"MaxCapacity"`
	MinCapacity *int64 `json:"MinCapacity"`
}
