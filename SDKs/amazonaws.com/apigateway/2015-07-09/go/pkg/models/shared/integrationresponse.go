package shared

type IntegrationResponse struct {
	ContentHandling    *ContentHandlingStrategyEnum `json:"contentHandling"`
	ResponseParameters map[string]string            `json:"responseParameters"`
	ResponseTemplates  map[string]string            `json:"responseTemplates"`
	SelectionPattern   *string                      `json:"selectionPattern"`
	StatusCode         *string                      `json:"statusCode"`
}
