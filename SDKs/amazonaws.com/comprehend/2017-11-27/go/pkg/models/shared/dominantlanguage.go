package shared

// DominantLanguage
// Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection.
type DominantLanguage struct {
	LanguageCode *string  `json:"LanguageCode,omitempty"`
	Score        *float32 `json:"Score,omitempty"`
}
