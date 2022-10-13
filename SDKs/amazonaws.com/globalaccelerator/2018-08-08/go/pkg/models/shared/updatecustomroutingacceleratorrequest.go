package shared

type UpdateCustomRoutingAcceleratorRequest struct {
	AcceleratorArn string             `json:"AcceleratorArn"`
	Enabled        *bool              `json:"Enabled"`
	IPAddressType  *IPAddressTypeEnum `json:"IpAddressType"`
	Name           *string            `json:"Name"`
}
