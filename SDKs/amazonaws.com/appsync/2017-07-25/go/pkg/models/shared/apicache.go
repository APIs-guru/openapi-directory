package shared



type APICache struct {
    APICachingBehavior *APICachingBehaviorEnum `json:"apiCachingBehavior,omitempty"`
    AtRestEncryptionEnabled *bool `json:"atRestEncryptionEnabled,omitempty"`
    Status *APICacheStatusEnum `json:"status,omitempty"`
    TransitEncryptionEnabled *bool `json:"transitEncryptionEnabled,omitempty"`
    TTL *int64 `json:"ttl,omitempty"`
    Type *APICacheTypeEnum `json:"type,omitempty"`
    
}

