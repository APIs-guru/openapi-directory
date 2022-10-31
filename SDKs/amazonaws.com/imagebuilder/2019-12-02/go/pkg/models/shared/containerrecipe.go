package shared



type ContainerRecipe struct {
    Arn *string `json:"arn,omitempty"`
    Components []ComponentConfiguration `json:"components,omitempty"`
    ContainerType *ContainerTypeEnum `json:"containerType,omitempty"`
    DateCreated *string `json:"dateCreated,omitempty"`
    Description *string `json:"description,omitempty"`
    DockerfileTemplateData *string `json:"dockerfileTemplateData,omitempty"`
    Encrypted *bool `json:"encrypted,omitempty"`
    InstanceConfiguration *InstanceConfiguration `json:"instanceConfiguration,omitempty"`
    KmsKeyID *string `json:"kmsKeyId,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *string `json:"owner,omitempty"`
    ParentImage *string `json:"parentImage,omitempty"`
    Platform *PlatformEnum `json:"platform,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    TargetRepository *TargetContainerRepository `json:"targetRepository,omitempty"`
    Version *string `json:"version,omitempty"`
    WorkingDirectory *string `json:"workingDirectory,omitempty"`
    
}

