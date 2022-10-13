package shared

type ProxyConfiguration struct {
	ContainerName string                      `json:"containerName"`
	Properties    *interface{}                `json:"properties"`
	Type          *ProxyConfigurationTypeEnum `json:"type"`
}
