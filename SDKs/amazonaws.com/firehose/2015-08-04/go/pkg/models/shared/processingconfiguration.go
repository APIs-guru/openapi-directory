package shared

type ProcessingConfiguration struct {
	Enabled    *bool       `json:"Enabled"`
	Processors []Processor `json:"Processors"`
}
