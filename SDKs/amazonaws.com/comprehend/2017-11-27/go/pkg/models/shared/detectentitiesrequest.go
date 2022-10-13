package shared

type DetectEntitiesRequest struct {
	EndpointArn  *string           `json:"EndpointArn"`
	LanguageCode *LanguageCodeEnum `json:"LanguageCode"`
	Text         string            `json:"Text"`
}
