package shared

type SyntaxToken struct {
	BeginOffset  *int64           `json:"BeginOffset"`
	EndOffset    *int64           `json:"EndOffset"`
	PartOfSpeech *PartOfSpeechTag `json:"PartOfSpeech"`
	Text         *string          `json:"Text"`
	TokenID      *int64           `json:"TokenId"`
}
