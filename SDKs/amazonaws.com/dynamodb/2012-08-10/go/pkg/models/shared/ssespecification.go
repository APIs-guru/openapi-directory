package shared



type SseSpecification struct {
    Enabled *bool `json:"Enabled,omitempty"`
    KmsMasterKeyID *string `json:"KMSMasterKeyId,omitempty"`
    SseType *SseTypeEnum `json:"SSEType,omitempty"`
    
}

