package shared

type ParameterRanges struct {
	CategoricalParameterRanges []CategoricalParameterRange `json:"CategoricalParameterRanges"`
	ContinuousParameterRanges  []ContinuousParameterRange  `json:"ContinuousParameterRanges"`
	IntegerParameterRanges     []IntegerParameterRange     `json:"IntegerParameterRanges"`
}
