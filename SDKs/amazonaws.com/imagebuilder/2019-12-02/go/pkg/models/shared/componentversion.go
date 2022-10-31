package shared



type ComponentVersion struct {
    Arn *string `json:"arn,omitempty"`
    DateCreated *string `json:"dateCreated,omitempty"`
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *string `json:"owner,omitempty"`
    Platform *PlatformEnum `json:"platform,omitempty"`
    SupportedOsVersions []string `json:"supportedOsVersions,omitempty"`
    Type *ComponentTypeEnum `json:"type,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

