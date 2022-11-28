package shared

// Match
// The part of a profile that contains a recommendation found during analysis.
type Match struct {
	FrameAddress         *string  `json:"frameAddress,omitempty"`
	TargetFramesIndex    *int64   `json:"targetFramesIndex,omitempty"`
	ThresholdBreachValue *float64 `json:"thresholdBreachValue,omitempty"`
}
