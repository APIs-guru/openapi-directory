package shared



type IntegrationResponse struct {
    ContentHandling *ContentHandlingStrategyEnum `json:"contentHandling,omitempty"`
    ResponseParameters map[string]string `json:"responseParameters,omitempty"`
    ResponseTemplates map[string]string `json:"responseTemplates,omitempty"`
    SelectionPattern *string `json:"selectionPattern,omitempty"`
    StatusCode *string `json:"statusCode,omitempty"`
    
}

