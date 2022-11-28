package shared

// CategoricalParameterRange
// Specifies a categorical hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
type CategoricalParameterRange struct {
	Name   string   `json:"Name"`
	Values []string `json:"Values"`
}
