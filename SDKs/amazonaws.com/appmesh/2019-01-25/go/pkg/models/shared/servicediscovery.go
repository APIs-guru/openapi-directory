package shared

// ServiceDiscovery
// An object that represents the service discovery information for a virtual node.
type ServiceDiscovery struct {
	AwsCloudMap *AwsCloudMapServiceDiscovery `json:"awsCloudMap,omitempty"`
	DNS         *DNSServiceDiscovery         `json:"dns,omitempty"`
}
