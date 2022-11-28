package shared

// ParameterRanges
// Specifies the categorical, continuous, and integer hyperparameters, and their ranges of tunable values. The range of tunable values determines which values that a hyperparameter tuning job can choose for the specified hyperparameter. This object is part of the <a>HyperParameterTuningJobConfig</a> object.
type ParameterRanges struct {
	CategoricalParameterRanges []CategoricalParameterRange `json:"CategoricalParameterRanges,omitempty"`
	ContinuousParameterRanges  []ContinuousParameterRange  `json:"ContinuousParameterRanges,omitempty"`
	IntegerParameterRanges     []IntegerParameterRange     `json:"IntegerParameterRanges,omitempty"`
}
