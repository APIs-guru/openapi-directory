package shared

type ByoipCidr struct {
	Cidr   *string             `json:"Cidr,omitempty"`
	Events []ByoipCidrEvent    `json:"Events,omitempty"`
	State  *ByoipCidrStateEnum `json:"State,omitempty"`
}
