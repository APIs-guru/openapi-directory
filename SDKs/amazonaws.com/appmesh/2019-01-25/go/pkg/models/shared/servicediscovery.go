package shared

type ServiceDiscovery struct {
	AwsCloudMap *AwsCloudMapServiceDiscovery `json:"awsCloudMap,omitempty"`
	DNS         *DNSServiceDiscovery         `json:"dns,omitempty"`
}
