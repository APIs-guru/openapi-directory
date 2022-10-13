package shared

type ScalingConstraints struct {
	MaxCapacity int64 `json:"MaxCapacity"`
	MinCapacity int64 `json:"MinCapacity"`
}
