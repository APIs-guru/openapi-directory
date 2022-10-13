package shared

type Integration struct {
	CacheKeyParameters   []string                       `json:"cacheKeyParameters"`
	CacheNamespace       *string                        `json:"cacheNamespace"`
	ConnectionID         *string                        `json:"connectionId"`
	ConnectionType       *ConnectionTypeEnum            `json:"connectionType"`
	ContentHandling      *ContentHandlingStrategyEnum   `json:"contentHandling"`
	Credentials          *string                        `json:"credentials"`
	HTTPMethod           *string                        `json:"httpMethod"`
	IntegrationResponses map[string]IntegrationResponse `json:"integrationResponses"`
	PassthroughBehavior  *string                        `json:"passthroughBehavior"`
	RequestParameters    map[string]string              `json:"requestParameters"`
	RequestTemplates     map[string]string              `json:"requestTemplates"`
	TimeoutInMillis      *int64                         `json:"timeoutInMillis"`
	TLSConfig            *TLSConfig                     `json:"tlsConfig"`
	Type                 *IntegrationTypeEnum           `json:"type"`
	URI                  *string                        `json:"uri"`
}
