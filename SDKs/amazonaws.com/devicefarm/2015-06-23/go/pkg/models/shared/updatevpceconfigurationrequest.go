package shared

type UpdateVpceConfigurationRequest struct {
	Arn                          string  `json:"arn"`
	ServiceDNSName               *string `json:"serviceDnsName"`
	VpceConfigurationDescription *string `json:"vpceConfigurationDescription"`
	VpceConfigurationName        *string `json:"vpceConfigurationName"`
	VpceServiceName              *string `json:"vpceServiceName"`
}
