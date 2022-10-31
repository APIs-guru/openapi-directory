package shared



type AwsCloudMapServiceDiscovery struct {
    Attributes []AwsCloudMapInstanceAttribute `json:"attributes,omitempty"`
    NamespaceName string `json:"namespaceName"`
    ServiceName string `json:"serviceName"`
    
}

