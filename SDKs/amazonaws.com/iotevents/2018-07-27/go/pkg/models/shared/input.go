package shared

// Input
// Information about the input.
type Input struct {
	InputConfiguration *InputConfiguration `json:"inputConfiguration,omitempty"`
	InputDefinition    *InputDefinition    `json:"inputDefinition,omitempty"`
}
