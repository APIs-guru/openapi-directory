package shared

type BatchGetResourceConfigResponse struct {
	BaseConfigurationItems  []BaseConfigurationItem `json:"baseConfigurationItems"`
	UnprocessedResourceKeys []ResourceKey           `json:"unprocessedResourceKeys"`
}
