package shared

// IntegerParameterRange
// Specifies an integer hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
type IntegerParameterRange struct {
	MaxValue    int64            `json:"MaxValue"`
	MinValue    int64            `json:"MinValue"`
	Name        string           `json:"Name"`
	ScalingType *ScalingTypeEnum `json:"ScalingType,omitempty"`
}
