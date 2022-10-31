package shared



type SchemeHmac struct {
    APIKey string `security:"name=Authorization"`
    
}

type Security struct {
    Hmac SchemeHmac `security:"scheme,type=apiKey,subtype=header"`
    
}

