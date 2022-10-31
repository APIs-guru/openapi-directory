package shared



type Sample struct {
    Arn *string `json:"arn,omitempty"`
    Type *SampleTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

