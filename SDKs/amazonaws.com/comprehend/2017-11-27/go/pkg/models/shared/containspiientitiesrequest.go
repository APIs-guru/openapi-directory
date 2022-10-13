package shared

type ContainsPiiEntitiesRequest struct {
	LanguageCode LanguageCodeEnum `json:"LanguageCode"`
	Text         string           `json:"Text"`
}
