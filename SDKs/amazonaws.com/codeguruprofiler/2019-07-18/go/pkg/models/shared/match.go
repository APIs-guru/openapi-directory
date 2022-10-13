package shared

type Match struct {
	FrameAddress         *string  `json:"frameAddress"`
	TargetFramesIndex    *int64   `json:"targetFramesIndex"`
	ThresholdBreachValue *float64 `json:"thresholdBreachValue"`
}
