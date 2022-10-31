package shared



type DetectPiiEntitiesRequest struct {
    LanguageCode LanguageCodeEnum `json:"LanguageCode"`
    Text string `json:"Text"`
    
}

