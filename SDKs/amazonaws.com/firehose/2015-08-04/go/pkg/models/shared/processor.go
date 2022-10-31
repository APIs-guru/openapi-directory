package shared



type Processor struct {
    Parameters []ProcessorParameter `json:"Parameters,omitempty"`
    Type ProcessorTypeEnum `json:"Type"`
    
}

