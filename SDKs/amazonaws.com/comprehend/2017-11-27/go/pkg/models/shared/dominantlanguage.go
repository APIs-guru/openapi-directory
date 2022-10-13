package shared

type DominantLanguage struct {
	LanguageCode *string  `json:"LanguageCode"`
	Score        *float32 `json:"Score"`
}
