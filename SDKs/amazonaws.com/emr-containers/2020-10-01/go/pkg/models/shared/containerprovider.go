package shared

// ContainerProvider
// The information about the container provider.
type ContainerProvider struct {
	ID   string                    `json:"id"`
	Info *ContainerInfo            `json:"info,omitempty"`
	Type ContainerProviderTypeEnum `json:"type"`
}
