package shared

type UpdateCustomRoutingAcceleratorRequest struct {
	AcceleratorArn string             `json:"AcceleratorArn"`
	Enabled        *bool              `json:"Enabled,omitempty"`
	IPAddressType  *IPAddressTypeEnum `json:"IpAddressType,omitempty"`
	Name           *string            `json:"Name,omitempty"`
}
