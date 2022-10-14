package shared

type ContainerProvider struct {
	ID   string                    `json:"id"`
	Info *ContainerInfo            `json:"info,omitempty"`
	Type ContainerProviderTypeEnum `json:"type"`
}
