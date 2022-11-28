package shared

// ResourceCount
// An object that contains the resource type and the number of resources.
type ResourceCount struct {
	Count        *int64            `json:"count,omitempty"`
	ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
}
