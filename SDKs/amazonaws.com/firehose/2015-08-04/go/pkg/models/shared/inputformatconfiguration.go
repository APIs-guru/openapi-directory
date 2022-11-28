package shared

// InputFormatConfiguration
// Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true.
type InputFormatConfiguration struct {
	Deserializer *Deserializer `json:"Deserializer,omitempty"`
}
