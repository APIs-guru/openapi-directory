package shared

type PartOfSpeechTag struct {
	Score *float32                 `json:"Score,omitempty"`
	Tag   *PartOfSpeechTagTypeEnum `json:"Tag,omitempty"`
}
