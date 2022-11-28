package shared

// ContinuousParameterRange
// Specifies a continuous hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
type ContinuousParameterRange struct {
	MaxValue    float64          `json:"MaxValue"`
	MinValue    float64          `json:"MinValue"`
	Name        string           `json:"Name"`
	ScalingType *ScalingTypeEnum `json:"ScalingType,omitempty"`
}
