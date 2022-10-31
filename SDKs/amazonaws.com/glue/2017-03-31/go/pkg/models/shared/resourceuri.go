package shared



type ResourceURI struct {
    ResourceType *ResourceTypeEnum `json:"ResourceType,omitempty"`
    URI *string `json:"Uri,omitempty"`
    
}

