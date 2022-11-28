package shared

// RedactionConfig
// Provides configuration parameters for PII entity redaction.
type RedactionConfig struct {
	MaskCharacter  *string                           `json:"MaskCharacter,omitempty"`
	MaskMode       *PiiEntitiesDetectionMaskModeEnum `json:"MaskMode,omitempty"`
	PiiEntityTypes []PiiEntityTypeEnum               `json:"PiiEntityTypes,omitempty"`
}
