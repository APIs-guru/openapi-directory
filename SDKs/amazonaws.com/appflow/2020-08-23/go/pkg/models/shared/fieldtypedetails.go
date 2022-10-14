package shared

type FieldTypeDetails struct {
	FieldType       string         `json:"fieldType"`
	FilterOperators []OperatorEnum `json:"filterOperators"`
	SupportedValues []string       `json:"supportedValues,omitempty"`
}
