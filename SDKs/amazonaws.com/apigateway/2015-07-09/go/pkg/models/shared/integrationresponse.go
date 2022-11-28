package shared

// IntegrationResponse
// <p>Represents an integration response. The status code must map to an existing <a>MethodResponse</a>, and parameters and templates can be used to transform the back-end response.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div>
type IntegrationResponse struct {
	ContentHandling    *ContentHandlingStrategyEnum `json:"contentHandling,omitempty"`
	ResponseParameters map[string]string            `json:"responseParameters,omitempty"`
	ResponseTemplates  map[string]string            `json:"responseTemplates,omitempty"`
	SelectionPattern   *string                      `json:"selectionPattern,omitempty"`
	StatusCode         *string                      `json:"statusCode,omitempty"`
}
