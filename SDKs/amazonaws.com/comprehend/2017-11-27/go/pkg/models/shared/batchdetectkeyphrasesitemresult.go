package shared

// BatchDetectKeyPhrasesItemResult
// The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
type BatchDetectKeyPhrasesItemResult struct {
	Index      *int64      `json:"Index,omitempty"`
	KeyPhrases []KeyPhrase `json:"KeyPhrases,omitempty"`
}
