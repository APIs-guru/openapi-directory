package shared



type ImageSummary struct {
    Arn *string `json:"arn,omitempty"`
    DateCreated *string `json:"dateCreated,omitempty"`
    Name *string `json:"name,omitempty"`
    OsVersion *string `json:"osVersion,omitempty"`
    OutputResources *OutputResources `json:"outputResources,omitempty"`
    Owner *string `json:"owner,omitempty"`
    Platform *PlatformEnum `json:"platform,omitempty"`
    State *ImageState `json:"state,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Type *ImageTypeEnum `json:"type,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

