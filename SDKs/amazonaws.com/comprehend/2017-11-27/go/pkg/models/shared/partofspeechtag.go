package shared

type PartOfSpeechTag struct {
	Score *float32                 `json:"Score"`
	Tag   *PartOfSpeechTagTypeEnum `json:"Tag"`
}
