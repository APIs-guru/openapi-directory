package shared

type ResourceKey struct {
	ResourceID   string           `json:"resourceId"`
	ResourceType ResourceTypeEnum `json:"resourceType"`
}
