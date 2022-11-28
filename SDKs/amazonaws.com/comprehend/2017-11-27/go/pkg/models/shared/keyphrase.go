package shared

// KeyPhrase
// Describes a key noun phrase.
type KeyPhrase struct {
	BeginOffset *int64   `json:"BeginOffset,omitempty"`
	EndOffset   *int64   `json:"EndOffset,omitempty"`
	Score       *float32 `json:"Score,omitempty"`
	Text        *string  `json:"Text,omitempty"`
}
