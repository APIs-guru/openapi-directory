package shared



type ImageRecipe struct {
    AdditionalInstanceConfiguration *AdditionalInstanceConfiguration `json:"additionalInstanceConfiguration,omitempty"`
    Arn *string `json:"arn,omitempty"`
    BlockDeviceMappings []InstanceBlockDeviceMapping `json:"blockDeviceMappings,omitempty"`
    Components []ComponentConfiguration `json:"components,omitempty"`
    DateCreated *string `json:"dateCreated,omitempty"`
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *string `json:"owner,omitempty"`
    ParentImage *string `json:"parentImage,omitempty"`
    Platform *PlatformEnum `json:"platform,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Type *ImageTypeEnum `json:"type,omitempty"`
    Version *string `json:"version,omitempty"`
    WorkingDirectory *string `json:"workingDirectory,omitempty"`
    
}

