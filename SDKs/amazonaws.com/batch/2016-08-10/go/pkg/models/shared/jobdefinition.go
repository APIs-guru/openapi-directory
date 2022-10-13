package shared

type JobDefinition struct {
	ContainerProperties  *ContainerProperties     `json:"containerProperties"`
	JobDefinitionArn     string                   `json:"jobDefinitionArn"`
	JobDefinitionName    string                   `json:"jobDefinitionName"`
	NodeProperties       *NodeProperties          `json:"nodeProperties"`
	Parameters           map[string]string        `json:"parameters"`
	PlatformCapabilities []PlatformCapabilityEnum `json:"platformCapabilities"`
	PropagateTags        *bool                    `json:"propagateTags"`
	RetryStrategy        *RetryStrategy           `json:"retryStrategy"`
	Revision             int64                    `json:"revision"`
	Status               *string                  `json:"status"`
	Tags                 map[string]string        `json:"tags"`
	Timeout              *JobTimeout              `json:"timeout"`
	Type                 string                   `json:"type"`
}
