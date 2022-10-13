package shared

type ContainerProvider struct {
	ID   string                    `json:"id"`
	Info *ContainerInfo            `json:"info"`
	Type ContainerProviderTypeEnum `json:"type"`
}
