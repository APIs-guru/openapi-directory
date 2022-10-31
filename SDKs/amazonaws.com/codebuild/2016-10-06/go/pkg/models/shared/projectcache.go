package shared



type ProjectCache struct {
    Location *string `json:"location,omitempty"`
    Modes []CacheModeEnum `json:"modes,omitempty"`
    Type CacheTypeEnum `json:"type"`
    
}

