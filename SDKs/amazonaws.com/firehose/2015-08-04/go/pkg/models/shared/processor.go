package shared

type Processor struct {
	Parameters []ProcessorParameter `json:"Parameters"`
	Type       ProcessorTypeEnum    `json:"Type"`
}
