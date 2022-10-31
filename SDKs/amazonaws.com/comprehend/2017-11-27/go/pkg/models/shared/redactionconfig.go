package shared



type RedactionConfig struct {
    MaskCharacter *string `json:"MaskCharacter,omitempty"`
    MaskMode *PiiEntitiesDetectionMaskModeEnum `json:"MaskMode,omitempty"`
    PiiEntityTypes []PiiEntityTypeEnum `json:"PiiEntityTypes,omitempty"`
    
}

