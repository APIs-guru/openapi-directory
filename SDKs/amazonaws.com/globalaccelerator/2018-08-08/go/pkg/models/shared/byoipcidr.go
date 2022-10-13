package shared

type ByoipCidr struct {
	Cidr   *string             `json:"Cidr"`
	Events []ByoipCidrEvent    `json:"Events"`
	State  *ByoipCidrStateEnum `json:"State"`
}
