package shared



type DescribeGatewayCapabilityConfigurationResponse struct {
    CapabilityConfiguration string `json:"capabilityConfiguration"`
    CapabilityNamespace string `json:"capabilityNamespace"`
    CapabilitySyncStatus CapabilitySyncStatusEnum `json:"capabilitySyncStatus"`
    GatewayID string `json:"gatewayId"`
    
}

