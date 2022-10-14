package shared

type Match struct {
	FrameAddress         *string  `json:"frameAddress,omitempty"`
	TargetFramesIndex    *int64   `json:"targetFramesIndex,omitempty"`
	ThresholdBreachValue *float64 `json:"thresholdBreachValue,omitempty"`
}
