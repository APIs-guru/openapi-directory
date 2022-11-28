package shared

// Scope
// This data type contains key-value pairs that identify various Amazon resources.
type Scope struct {
	Key   *ScopeTypeEnum `json:"key,omitempty"`
	Value *string        `json:"value,omitempty"`
}
