package shared

// AwsCloudMapServiceDiscovery
// <p>An object that represents the Cloud Map service discovery information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note>
type AwsCloudMapServiceDiscovery struct {
	Attributes    []AwsCloudMapInstanceAttribute `json:"attributes,omitempty"`
	NamespaceName string                         `json:"namespaceName"`
	ServiceName   string                         `json:"serviceName"`
}
