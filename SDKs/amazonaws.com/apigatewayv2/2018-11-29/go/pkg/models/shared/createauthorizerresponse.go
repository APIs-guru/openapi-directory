package shared

type CreateAuthorizerResponse struct {
	AuthorizerCredentialsArn       *string             `json:"AuthorizerCredentialsArn"`
	AuthorizerID                   *string             `json:"AuthorizerId"`
	AuthorizerPayloadFormatVersion *string             `json:"AuthorizerPayloadFormatVersion"`
	AuthorizerResultTTLInSeconds   *int64              `json:"AuthorizerResultTtlInSeconds"`
	AuthorizerType                 *AuthorizerTypeEnum `json:"AuthorizerType"`
	AuthorizerURI                  *string             `json:"AuthorizerUri"`
	EnableSimpleResponses          *bool               `json:"EnableSimpleResponses"`
	IdentitySource                 []string            `json:"IdentitySource"`
	IdentityValidationExpression   *string             `json:"IdentityValidationExpression"`
	JwtConfiguration               *JwtConfiguration   `json:"JwtConfiguration"`
	Name                           *string             `json:"Name"`
}
