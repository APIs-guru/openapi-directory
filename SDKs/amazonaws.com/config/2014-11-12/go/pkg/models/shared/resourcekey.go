package shared

// ResourceKey
// The details that identify a resource within Config, including the resource type and resource ID.
type ResourceKey struct {
	ResourceID   string           `json:"resourceId"`
	ResourceType ResourceTypeEnum `json:"resourceType"`
}
