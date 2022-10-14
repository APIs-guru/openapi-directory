package shared

type JobDefinition struct {
	ContainerProperties  *ContainerProperties     `json:"containerProperties,omitempty"`
	JobDefinitionArn     string                   `json:"jobDefinitionArn"`
	JobDefinitionName    string                   `json:"jobDefinitionName"`
	NodeProperties       *NodeProperties          `json:"nodeProperties,omitempty"`
	Parameters           map[string]string        `json:"parameters,omitempty"`
	PlatformCapabilities []PlatformCapabilityEnum `json:"platformCapabilities,omitempty"`
	PropagateTags        *bool                    `json:"propagateTags,omitempty"`
	RetryStrategy        *RetryStrategy           `json:"retryStrategy,omitempty"`
	Revision             int64                    `json:"revision"`
	Status               *string                  `json:"status,omitempty"`
	Tags                 map[string]string        `json:"tags,omitempty"`
	Timeout              *JobTimeout              `json:"timeout,omitempty"`
	Type                 string                   `json:"type"`
}
