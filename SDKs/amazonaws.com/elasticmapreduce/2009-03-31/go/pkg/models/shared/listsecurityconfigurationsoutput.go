package shared

type ListSecurityConfigurationsOutput struct {
	Marker                 *string                        `json:"Marker"`
	SecurityConfigurations []SecurityConfigurationSummary `json:"SecurityConfigurations"`
}
