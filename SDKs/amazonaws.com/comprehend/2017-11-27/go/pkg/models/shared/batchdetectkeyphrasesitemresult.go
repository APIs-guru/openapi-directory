package shared

type BatchDetectKeyPhrasesItemResult struct {
	Index      *int64      `json:"Index,omitempty"`
	KeyPhrases []KeyPhrase `json:"KeyPhrases,omitempty"`
}
