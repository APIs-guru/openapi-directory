package shared

type CreateIntegrationResult struct {
	APIGatewayManaged                      *bool                        `json:"ApiGatewayManaged"`
	ConnectionID                           *string                      `json:"ConnectionId"`
	ConnectionType                         *ConnectionTypeEnum          `json:"ConnectionType"`
	ContentHandlingStrategy                *ContentHandlingStrategyEnum `json:"ContentHandlingStrategy"`
	CredentialsArn                         *string                      `json:"CredentialsArn"`
	Description                            *string                      `json:"Description"`
	IntegrationID                          *string                      `json:"IntegrationId"`
	IntegrationMethod                      *string                      `json:"IntegrationMethod"`
	IntegrationResponseSelectionExpression *string                      `json:"IntegrationResponseSelectionExpression"`
	IntegrationSubtype                     *string                      `json:"IntegrationSubtype"`
	IntegrationType                        *IntegrationTypeEnum         `json:"IntegrationType"`
	IntegrationURI                         *string                      `json:"IntegrationUri"`
	PassthroughBehavior                    *PassthroughBehaviorEnum     `json:"PassthroughBehavior"`
	PayloadFormatVersion                   *string                      `json:"PayloadFormatVersion"`
	RequestParameters                      map[string]string            `json:"RequestParameters"`
	RequestTemplates                       map[string]string            `json:"RequestTemplates"`
	ResponseParameters                     map[string]map[string]string `json:"ResponseParameters"`
	TemplateSelectionExpression            *string                      `json:"TemplateSelectionExpression"`
	TimeoutInMillis                        *int64                       `json:"TimeoutInMillis"`
	TLSConfig                              *TLSConfig                   `json:"TlsConfig"`
}
