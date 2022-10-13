package shared

type RedactionConfig struct {
	MaskCharacter  *string                           `json:"MaskCharacter"`
	MaskMode       *PiiEntitiesDetectionMaskModeEnum `json:"MaskMode"`
	PiiEntityTypes []PiiEntityTypeEnum               `json:"PiiEntityTypes"`
}
