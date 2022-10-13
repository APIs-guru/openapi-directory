package shared

type ResourceCount struct {
	Count        *int64            `json:"count"`
	ResourceType *ResourceTypeEnum `json:"resourceType"`
}
