package shared

type AwsCloudMapServiceDiscovery struct {
	Attributes    []AwsCloudMapInstanceAttribute `json:"attributes"`
	NamespaceName string                         `json:"namespaceName"`
	ServiceName   string                         `json:"serviceName"`
}
