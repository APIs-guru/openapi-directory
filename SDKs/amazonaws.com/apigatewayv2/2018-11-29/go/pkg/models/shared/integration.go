package shared



type Integration struct {
    APIGatewayManaged *bool `json:"ApiGatewayManaged,omitempty"`
    ConnectionID *string `json:"ConnectionId,omitempty"`
    ConnectionType *ConnectionTypeEnum `json:"ConnectionType,omitempty"`
    ContentHandlingStrategy *ContentHandlingStrategyEnum `json:"ContentHandlingStrategy,omitempty"`
    CredentialsArn *string `json:"CredentialsArn,omitempty"`
    Description *string `json:"Description,omitempty"`
    IntegrationID *string `json:"IntegrationId,omitempty"`
    IntegrationMethod *string `json:"IntegrationMethod,omitempty"`
    IntegrationResponseSelectionExpression *string `json:"IntegrationResponseSelectionExpression,omitempty"`
    IntegrationSubtype *string `json:"IntegrationSubtype,omitempty"`
    IntegrationType *IntegrationTypeEnum `json:"IntegrationType,omitempty"`
    IntegrationURI *string `json:"IntegrationUri,omitempty"`
    PassthroughBehavior *PassthroughBehaviorEnum `json:"PassthroughBehavior,omitempty"`
    PayloadFormatVersion *string `json:"PayloadFormatVersion,omitempty"`
    RequestParameters map[string]string `json:"RequestParameters,omitempty"`
    RequestTemplates map[string]string `json:"RequestTemplates,omitempty"`
    ResponseParameters map[string]map[string]string `json:"ResponseParameters,omitempty"`
    TemplateSelectionExpression *string `json:"TemplateSelectionExpression,omitempty"`
    TimeoutInMillis *int64 `json:"TimeoutInMillis,omitempty"`
    TLSConfig *TLSConfig `json:"TlsConfig,omitempty"`
    
}

