package shared

type DataFormatConversionConfiguration struct {
	Enabled                   *bool                      `json:"Enabled"`
	InputFormatConfiguration  *InputFormatConfiguration  `json:"InputFormatConfiguration"`
	OutputFormatConfiguration *OutputFormatConfiguration `json:"OutputFormatConfiguration"`
	SchemaConfiguration       *SchemaConfiguration       `json:"SchemaConfiguration"`
}
