package shared



type GatewayCapabilitySummary struct {
    CapabilityNamespace string `json:"capabilityNamespace"`
    CapabilitySyncStatus CapabilitySyncStatusEnum `json:"capabilitySyncStatus"`
    
}

