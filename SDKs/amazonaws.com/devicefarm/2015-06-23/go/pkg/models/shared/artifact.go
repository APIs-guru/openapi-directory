package shared



type Artifact struct {
    Arn *string `json:"arn,omitempty"`
    Extension *string `json:"extension,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *ArtifactTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

