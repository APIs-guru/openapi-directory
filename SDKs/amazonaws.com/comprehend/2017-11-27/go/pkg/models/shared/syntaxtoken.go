package shared



type SyntaxToken struct {
    BeginOffset *int64 `json:"BeginOffset,omitempty"`
    EndOffset *int64 `json:"EndOffset,omitempty"`
    PartOfSpeech *PartOfSpeechTag `json:"PartOfSpeech,omitempty"`
    Text *string `json:"Text,omitempty"`
    TokenID *int64 `json:"TokenId,omitempty"`
    
}

