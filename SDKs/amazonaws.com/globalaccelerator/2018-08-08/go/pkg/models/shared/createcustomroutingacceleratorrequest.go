package shared

type CreateCustomRoutingAcceleratorRequest struct {
	Enabled          *bool              `json:"Enabled"`
	IdempotencyToken string             `json:"IdempotencyToken"`
	IPAddressType    *IPAddressTypeEnum `json:"IpAddressType"`
	IPAddresses      []string           `json:"IpAddresses"`
	Name             string             `json:"Name"`
	Tags             []Tag              `json:"Tags"`
}
