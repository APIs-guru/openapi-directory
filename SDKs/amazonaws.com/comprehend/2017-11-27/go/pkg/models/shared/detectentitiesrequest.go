package shared



type DetectEntitiesRequest struct {
    EndpointArn *string `json:"EndpointArn,omitempty"`
    LanguageCode *LanguageCodeEnum `json:"LanguageCode,omitempty"`
    Text string `json:"Text"`
    
}

