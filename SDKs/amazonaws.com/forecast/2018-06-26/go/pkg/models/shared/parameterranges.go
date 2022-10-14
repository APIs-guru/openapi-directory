package shared

type ParameterRanges struct {
	CategoricalParameterRanges []CategoricalParameterRange `json:"CategoricalParameterRanges,omitempty"`
	ContinuousParameterRanges  []ContinuousParameterRange  `json:"ContinuousParameterRanges,omitempty"`
	IntegerParameterRanges     []IntegerParameterRange     `json:"IntegerParameterRanges,omitempty"`
}
