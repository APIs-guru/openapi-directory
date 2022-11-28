package shared

// TransformParameters
// The algorithm-specific parameters that are associated with the machine learning transform.
type TransformParameters struct {
	FindMatchesParameters *FindMatchesParameters `json:"FindMatchesParameters,omitempty"`
	TransformType         TransformTypeEnum      `json:"TransformType"`
}
