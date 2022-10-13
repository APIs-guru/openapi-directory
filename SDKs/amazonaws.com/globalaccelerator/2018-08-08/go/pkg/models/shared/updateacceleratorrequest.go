package shared

type UpdateAcceleratorRequest struct {
	AcceleratorArn string             `json:"AcceleratorArn"`
	Enabled        *bool              `json:"Enabled"`
	IPAddressType  *IPAddressTypeEnum `json:"IpAddressType"`
	Name           *string            `json:"Name"`
}
