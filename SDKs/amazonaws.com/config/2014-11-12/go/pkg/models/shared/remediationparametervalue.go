package shared

type RemediationParameterValue struct {
	ResourceValue *ResourceValue `json:"ResourceValue,omitempty"`
	StaticValue   *StaticValue   `json:"StaticValue,omitempty"`
}
