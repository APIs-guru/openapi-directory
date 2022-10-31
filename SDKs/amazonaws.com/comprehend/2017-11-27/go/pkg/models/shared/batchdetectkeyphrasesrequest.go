package shared



type BatchDetectKeyPhrasesRequest struct {
    LanguageCode LanguageCodeEnum `json:"LanguageCode"`
    TextList []string `json:"TextList"`
    
}

