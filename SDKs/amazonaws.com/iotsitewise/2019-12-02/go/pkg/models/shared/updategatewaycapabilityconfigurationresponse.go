package shared

type UpdateGatewayCapabilityConfigurationResponse struct {
	CapabilityNamespace  string                   `json:"capabilityNamespace"`
	CapabilitySyncStatus CapabilitySyncStatusEnum `json:"capabilitySyncStatus"`
}
