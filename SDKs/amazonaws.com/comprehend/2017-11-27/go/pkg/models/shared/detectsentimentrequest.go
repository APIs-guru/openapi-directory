package shared



type DetectSentimentRequest struct {
    LanguageCode LanguageCodeEnum `json:"LanguageCode"`
    Text string `json:"Text"`
    
}

