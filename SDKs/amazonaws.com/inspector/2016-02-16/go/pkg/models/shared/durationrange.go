package shared

type DurationRange struct {
	MaxSeconds *int64 `json:"maxSeconds"`
	MinSeconds *int64 `json:"minSeconds"`
}
