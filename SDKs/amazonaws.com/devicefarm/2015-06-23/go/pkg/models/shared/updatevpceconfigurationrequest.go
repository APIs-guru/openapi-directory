package shared

type UpdateVpceConfigurationRequest struct {
	Arn                          string  `json:"arn"`
	ServiceDNSName               *string `json:"serviceDnsName,omitempty"`
	VpceConfigurationDescription *string `json:"vpceConfigurationDescription,omitempty"`
	VpceConfigurationName        *string `json:"vpceConfigurationName,omitempty"`
	VpceServiceName              *string `json:"vpceServiceName,omitempty"`
}
