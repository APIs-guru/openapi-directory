package shared

// RemediationParameterValue
// The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.
type RemediationParameterValue struct {
	ResourceValue *ResourceValue `json:"ResourceValue,omitempty"`
	StaticValue   *StaticValue   `json:"StaticValue,omitempty"`
}
