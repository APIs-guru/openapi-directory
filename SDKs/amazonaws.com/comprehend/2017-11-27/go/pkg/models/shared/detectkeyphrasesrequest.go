package shared



type DetectKeyPhrasesRequest struct {
    LanguageCode LanguageCodeEnum `json:"LanguageCode"`
    Text string `json:"Text"`
    
}

