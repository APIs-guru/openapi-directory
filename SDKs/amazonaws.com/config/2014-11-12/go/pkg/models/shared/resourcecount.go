package shared



type ResourceCount struct {
    Count *int64 `json:"count,omitempty"`
    ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
    
}

