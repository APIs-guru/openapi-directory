package shared

// ServiceDiscovery
// An object representing the service discovery information for a virtual node.
type ServiceDiscovery struct {
	DNS *DNSServiceDiscovery `json:"dns,omitempty"`
}
