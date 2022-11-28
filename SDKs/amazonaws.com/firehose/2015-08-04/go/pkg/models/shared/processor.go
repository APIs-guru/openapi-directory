package shared

// Processor
// Describes a data processor.
type Processor struct {
	Parameters []ProcessorParameter `json:"Parameters,omitempty"`
	Type       ProcessorTypeEnum    `json:"Type"`
}
