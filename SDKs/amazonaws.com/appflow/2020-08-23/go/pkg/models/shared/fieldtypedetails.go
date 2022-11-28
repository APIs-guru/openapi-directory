package shared

// FieldTypeDetails
//
//	Contains details regarding the supported field type and the operators that can be applied for filtering.
type FieldTypeDetails struct {
	FieldType       string         `json:"fieldType"`
	FilterOperators []OperatorEnum `json:"filterOperators"`
	SupportedValues []string       `json:"supportedValues,omitempty"`
}
