package shared

type ServiceDiscovery struct {
	AwsCloudMap *AwsCloudMapServiceDiscovery `json:"awsCloudMap"`
	DNS         *DNSServiceDiscovery         `json:"dns"`
}
