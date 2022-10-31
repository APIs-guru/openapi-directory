package shared

type UpdateIntegrationResponseResponse struct {
	ContentHandlingStrategy     *ContentHandlingStrategyEnum `json:"ContentHandlingStrategy,omitempty"`
	IntegrationResponseID       *string                      `json:"IntegrationResponseId,omitempty"`
	IntegrationResponseKey      *string                      `json:"IntegrationResponseKey,omitempty"`
	ResponseParameters          map[string]string            `json:"ResponseParameters,omitempty"`
	ResponseTemplates           map[string]string            `json:"ResponseTemplates,omitempty"`
	TemplateSelectionExpression *string                      `json:"TemplateSelectionExpression,omitempty"`
}
