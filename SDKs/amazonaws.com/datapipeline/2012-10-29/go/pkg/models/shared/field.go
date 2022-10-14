package shared

type Field struct {
	Key         string  `json:"key"`
	RefValue    *string `json:"refValue,omitempty"`
	StringValue *string `json:"stringValue,omitempty"`
}
