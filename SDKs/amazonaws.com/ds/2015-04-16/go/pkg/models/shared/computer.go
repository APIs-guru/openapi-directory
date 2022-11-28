package shared

// Computer
// Contains information about a computer account in a directory.
type Computer struct {
	ComputerAttributes []Attribute `json:"ComputerAttributes,omitempty"`
	ComputerID         *string     `json:"ComputerId,omitempty"`
	ComputerName       *string     `json:"ComputerName,omitempty"`
}
