package shared



type Integration struct {
    CacheKeyParameters []string `json:"cacheKeyParameters,omitempty"`
    CacheNamespace *string `json:"cacheNamespace,omitempty"`
    ConnectionID *string `json:"connectionId,omitempty"`
    ConnectionType *ConnectionTypeEnum `json:"connectionType,omitempty"`
    ContentHandling *ContentHandlingStrategyEnum `json:"contentHandling,omitempty"`
    Credentials *string `json:"credentials,omitempty"`
    HTTPMethod *string `json:"httpMethod,omitempty"`
    IntegrationResponses map[string]IntegrationResponse `json:"integrationResponses,omitempty"`
    PassthroughBehavior *string `json:"passthroughBehavior,omitempty"`
    RequestParameters map[string]string `json:"requestParameters,omitempty"`
    RequestTemplates map[string]string `json:"requestTemplates,omitempty"`
    TimeoutInMillis *int64 `json:"timeoutInMillis,omitempty"`
    TLSConfig *TLSConfig `json:"tlsConfig,omitempty"`
    Type *IntegrationTypeEnum `json:"type,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

