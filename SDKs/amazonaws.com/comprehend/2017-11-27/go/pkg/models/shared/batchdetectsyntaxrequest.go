package shared

type BatchDetectSyntaxRequest struct {
	LanguageCode SyntaxLanguageCodeEnum `json:"LanguageCode"`
	TextList     []string               `json:"TextList"`
}
