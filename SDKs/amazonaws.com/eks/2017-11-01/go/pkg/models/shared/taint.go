package shared

// Taint
// A property that allows a node to repel a set of pods.
type Taint struct {
	Effect *TaintEffectEnum `json:"effect,omitempty"`
	Key    *string          `json:"key,omitempty"`
	Value  *string          `json:"value,omitempty"`
}
