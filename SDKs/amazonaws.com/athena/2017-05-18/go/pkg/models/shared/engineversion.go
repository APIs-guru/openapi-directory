package shared

// EngineVersion
// The Athena engine version for running queries.
type EngineVersion struct {
	EffectiveEngineVersion *string `json:"EffectiveEngineVersion,omitempty"`
	SelectedEngineVersion  *string `json:"SelectedEngineVersion,omitempty"`
}
