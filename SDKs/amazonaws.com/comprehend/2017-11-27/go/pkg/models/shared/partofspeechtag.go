package shared

// PartOfSpeechTag
// Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a>how-syntax</a>.
type PartOfSpeechTag struct {
	Score *float32                 `json:"Score,omitempty"`
	Tag   *PartOfSpeechTagTypeEnum `json:"Tag,omitempty"`
}
