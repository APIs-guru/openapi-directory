package shared



type RecordingGroup struct {
    AllSupported *bool `json:"allSupported,omitempty"`
    IncludeGlobalResourceTypes *bool `json:"includeGlobalResourceTypes,omitempty"`
    ResourceTypes []ResourceTypeEnum `json:"resourceTypes,omitempty"`
    
}

