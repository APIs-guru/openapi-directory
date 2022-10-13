package shared

type BatchDetectKeyPhrasesItemResult struct {
	Index      *int64      `json:"Index"`
	KeyPhrases []KeyPhrase `json:"KeyPhrases"`
}
