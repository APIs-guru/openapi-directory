package shared

type ProxyConfiguration struct {
	ContainerName string                      `json:"containerName"`
	Properties    *interface{}                `json:"properties,omitempty"`
	Type          *ProxyConfigurationTypeEnum `json:"type,omitempty"`
}
