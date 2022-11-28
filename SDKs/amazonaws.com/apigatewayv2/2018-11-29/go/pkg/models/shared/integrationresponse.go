package shared

// IntegrationResponse
// Represents an integration response.
type IntegrationResponse struct {
	ContentHandlingStrategy     *ContentHandlingStrategyEnum `json:"ContentHandlingStrategy,omitempty"`
	IntegrationResponseID       *string                      `json:"IntegrationResponseId,omitempty"`
	IntegrationResponseKey      string                       `json:"IntegrationResponseKey"`
	ResponseParameters          map[string]string            `json:"ResponseParameters,omitempty"`
	ResponseTemplates           map[string]string            `json:"ResponseTemplates,omitempty"`
	TemplateSelectionExpression *string                      `json:"TemplateSelectionExpression,omitempty"`
}
