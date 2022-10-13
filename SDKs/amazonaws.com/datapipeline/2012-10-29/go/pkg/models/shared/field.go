package shared

type Field struct {
	Key         string  `json:"key"`
	RefValue    *string `json:"refValue"`
	StringValue *string `json:"stringValue"`
}
