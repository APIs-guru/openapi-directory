package shared

// ProcessingConfiguration
// Describes a data processing configuration.
type ProcessingConfiguration struct {
	Enabled    *bool       `json:"Enabled,omitempty"`
	Processors []Processor `json:"Processors,omitempty"`
}
