package shared

// Field
// A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both.
type Field struct {
	Key         string  `json:"key"`
	RefValue    *string `json:"refValue,omitempty"`
	StringValue *string `json:"stringValue,omitempty"`
}
