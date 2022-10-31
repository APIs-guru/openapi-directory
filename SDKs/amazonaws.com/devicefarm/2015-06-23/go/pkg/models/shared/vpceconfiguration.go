package shared



type VpceConfiguration struct {
    Arn *string `json:"arn,omitempty"`
    ServiceDNSName *string `json:"serviceDnsName,omitempty"`
    VpceConfigurationDescription *string `json:"vpceConfigurationDescription,omitempty"`
    VpceConfigurationName *string `json:"vpceConfigurationName,omitempty"`
    VpceServiceName *string `json:"vpceServiceName,omitempty"`
    
}

