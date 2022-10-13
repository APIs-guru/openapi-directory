package shared

type Computer struct {
	ComputerAttributes []Attribute `json:"ComputerAttributes"`
	ComputerID         *string     `json:"ComputerId"`
	ComputerName       *string     `json:"ComputerName"`
}
