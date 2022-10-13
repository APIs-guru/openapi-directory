package shared

type UpdateIntegrationResponseResponse struct {
	ContentHandlingStrategy     *ContentHandlingStrategyEnum `json:"ContentHandlingStrategy"`
	IntegrationResponseID       *string                      `json:"IntegrationResponseId"`
	IntegrationResponseKey      *string                      `json:"IntegrationResponseKey"`
	ResponseParameters          map[string]string            `json:"ResponseParameters"`
	ResponseTemplates           map[string]string            `json:"ResponseTemplates"`
	TemplateSelectionExpression *string                      `json:"TemplateSelectionExpression"`
}
