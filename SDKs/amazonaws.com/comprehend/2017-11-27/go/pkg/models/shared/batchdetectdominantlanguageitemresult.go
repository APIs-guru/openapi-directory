package shared



type BatchDetectDominantLanguageItemResult struct {
    Index *int64 `json:"Index,omitempty"`
    Languages []DominantLanguage `json:"Languages,omitempty"`
    
}

