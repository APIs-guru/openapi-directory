package shared

type BatchDetectSentimentRequest struct {
	LanguageCode LanguageCodeEnum `json:"LanguageCode"`
	TextList     []string         `json:"TextList"`
}
