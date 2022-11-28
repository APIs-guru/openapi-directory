package shared

// ParameterNameValue
// An individual DAX parameter.
type ParameterNameValue struct {
	ParameterName  *string `json:"ParameterName,omitempty"`
	ParameterValue *string `json:"ParameterValue,omitempty"`
}
