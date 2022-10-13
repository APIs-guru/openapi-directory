package shared

type GatewayResponse struct {
	DefaultResponse    *bool                    `json:"defaultResponse"`
	ResponseParameters map[string]string        `json:"responseParameters"`
	ResponseTemplates  map[string]string        `json:"responseTemplates"`
	ResponseType       *GatewayResponseTypeEnum `json:"responseType"`
	StatusCode         *string                  `json:"statusCode"`
}
