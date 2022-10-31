package shared



type SchemeAPIKeyAuth struct {
    APIKey string `security:"name=X-API-Key"`
    
}

type SchemeBasicAuth struct {
    Authorization string `security:"name=Authorization"`
    
}

