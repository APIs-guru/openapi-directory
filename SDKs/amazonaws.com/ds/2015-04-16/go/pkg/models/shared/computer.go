package shared



type Computer struct {
    ComputerAttributes []Attribute `json:"ComputerAttributes,omitempty"`
    ComputerID *string `json:"ComputerId,omitempty"`
    ComputerName *string `json:"ComputerName,omitempty"`
    
}

