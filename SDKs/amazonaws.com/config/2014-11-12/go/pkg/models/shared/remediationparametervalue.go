package shared

type RemediationParameterValue struct {
	ResourceValue *ResourceValue `json:"ResourceValue"`
	StaticValue   *StaticValue   `json:"StaticValue"`
}
