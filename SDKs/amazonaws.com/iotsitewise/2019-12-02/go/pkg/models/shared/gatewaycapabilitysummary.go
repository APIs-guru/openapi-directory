package shared

// GatewayCapabilitySummary
// Contains a summary of a gateway capability configuration.
type GatewayCapabilitySummary struct {
	CapabilityNamespace  string                   `json:"capabilityNamespace"`
	CapabilitySyncStatus CapabilitySyncStatusEnum `json:"capabilitySyncStatus"`
}
