package shared

// Authorizer
// <p>Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
type Authorizer struct {
	AuthType                     *string             `json:"authType,omitempty"`
	AuthorizerCredentials        *string             `json:"authorizerCredentials,omitempty"`
	AuthorizerResultTTLInSeconds *int64              `json:"authorizerResultTtlInSeconds,omitempty"`
	AuthorizerURI                *string             `json:"authorizerUri,omitempty"`
	ID                           *string             `json:"id,omitempty"`
	IdentitySource               *string             `json:"identitySource,omitempty"`
	IdentityValidationExpression *string             `json:"identityValidationExpression,omitempty"`
	Name                         *string             `json:"name,omitempty"`
	ProviderArNs                 []string            `json:"providerARNs,omitempty"`
	Type                         *AuthorizerTypeEnum `json:"type,omitempty"`
}
