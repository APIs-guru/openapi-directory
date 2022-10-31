package shared

type DetectSyntaxRequest struct {
	LanguageCode SyntaxLanguageCodeEnum `json:"LanguageCode"`
	Text         string                 `json:"Text"`
}
