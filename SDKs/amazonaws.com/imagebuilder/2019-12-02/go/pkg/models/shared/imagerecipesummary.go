package shared



type ImageRecipeSummary struct {
    Arn *string `json:"arn,omitempty"`
    DateCreated *string `json:"dateCreated,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *string `json:"owner,omitempty"`
    ParentImage *string `json:"parentImage,omitempty"`
    Platform *PlatformEnum `json:"platform,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

