package shared

type CreateVpceConfigurationRequest struct {
	ServiceDNSName               string  `json:"serviceDnsName"`
	VpceConfigurationDescription *string `json:"vpceConfigurationDescription,omitempty"`
	VpceConfigurationName        string  `json:"vpceConfigurationName"`
	VpceServiceName              string  `json:"vpceServiceName"`
}
