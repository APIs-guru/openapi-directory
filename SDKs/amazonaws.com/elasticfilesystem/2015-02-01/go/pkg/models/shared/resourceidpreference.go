package shared



type ResourceIDPreference struct {
    ResourceIDType *ResourceIDTypeEnum `json:"ResourceIdType,omitempty"`
    Resources []ResourceEnum `json:"Resources,omitempty"`
    
}

