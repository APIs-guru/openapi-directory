package shared

type ContinuousParameterRange struct {
	MaxValue    float64          `json:"MaxValue"`
	MinValue    float64          `json:"MinValue"`
	Name        string           `json:"Name"`
	ScalingType *ScalingTypeEnum `json:"ScalingType,omitempty"`
}
