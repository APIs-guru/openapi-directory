package shared

// BatchDetectDominantLanguageItemResult
// The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
type BatchDetectDominantLanguageItemResult struct {
	Index     *int64             `json:"Index,omitempty"`
	Languages []DominantLanguage `json:"Languages,omitempty"`
}
