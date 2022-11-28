package shared

// SyntaxToken
// Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text.
type SyntaxToken struct {
	BeginOffset  *int64           `json:"BeginOffset,omitempty"`
	EndOffset    *int64           `json:"EndOffset,omitempty"`
	PartOfSpeech *PartOfSpeechTag `json:"PartOfSpeech,omitempty"`
	Text         *string          `json:"Text,omitempty"`
	TokenID      *int64           `json:"TokenId,omitempty"`
}
