package shared

type BatchDetectDominantLanguageItemResult struct {
	Index     *int64             `json:"Index"`
	Languages []DominantLanguage `json:"Languages"`
}
