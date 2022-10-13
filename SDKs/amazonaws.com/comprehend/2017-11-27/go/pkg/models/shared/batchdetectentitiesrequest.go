package shared

type BatchDetectEntitiesRequest struct {
	LanguageCode LanguageCodeEnum `json:"LanguageCode"`
	TextList     []string         `json:"TextList"`
}
