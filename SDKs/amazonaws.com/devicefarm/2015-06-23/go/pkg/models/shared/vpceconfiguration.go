package shared

// VpceConfiguration
// Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration.
type VpceConfiguration struct {
	Arn                          *string `json:"arn,omitempty"`
	ServiceDNSName               *string `json:"serviceDnsName,omitempty"`
	VpceConfigurationDescription *string `json:"vpceConfigurationDescription,omitempty"`
	VpceConfigurationName        *string `json:"vpceConfigurationName,omitempty"`
	VpceServiceName              *string `json:"vpceServiceName,omitempty"`
}
