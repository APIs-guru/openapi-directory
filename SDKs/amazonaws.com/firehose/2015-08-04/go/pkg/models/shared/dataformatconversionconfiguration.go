package shared

type DataFormatConversionConfiguration struct {
	Enabled                   *bool                      `json:"Enabled,omitempty"`
	InputFormatConfiguration  *InputFormatConfiguration  `json:"InputFormatConfiguration,omitempty"`
	OutputFormatConfiguration *OutputFormatConfiguration `json:"OutputFormatConfiguration,omitempty"`
	SchemaConfiguration       *SchemaConfiguration       `json:"SchemaConfiguration,omitempty"`
}
