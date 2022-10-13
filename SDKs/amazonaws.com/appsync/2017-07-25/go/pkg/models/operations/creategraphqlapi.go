package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGraphqlAPIHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateGraphqlAPIRequestBodyAuthenticationTypeEnum string

const (
	CreateGraphqlAPIRequestBodyAuthenticationTypeEnumAPIKey                 CreateGraphqlAPIRequestBodyAuthenticationTypeEnum = "API_KEY"
	CreateGraphqlAPIRequestBodyAuthenticationTypeEnumAwsIam                 CreateGraphqlAPIRequestBodyAuthenticationTypeEnum = "AWS_IAM"
	CreateGraphqlAPIRequestBodyAuthenticationTypeEnumAmazonCognitoUserPools CreateGraphqlAPIRequestBodyAuthenticationTypeEnum = "AMAZON_COGNITO_USER_POOLS"
	CreateGraphqlAPIRequestBodyAuthenticationTypeEnumOpenidConnect          CreateGraphqlAPIRequestBodyAuthenticationTypeEnum = "OPENID_CONNECT"
	CreateGraphqlAPIRequestBodyAuthenticationTypeEnumAwsLambda              CreateGraphqlAPIRequestBodyAuthenticationTypeEnum = "AWS_LAMBDA"
)

type CreateGraphqlAPIRequestBodyLambdaAuthorizerConfig struct {
	AuthorizerResultTTLInSeconds *int64  `json:"authorizerResultTtlInSeconds"`
	AuthorizerURI                *string `json:"authorizerUri"`
	IdentityValidationExpression *string `json:"identityValidationExpression"`
}

type CreateGraphqlAPIRequestBodyLogConfig struct {
	CloudWatchLogsRoleArn *string                   `json:"cloudWatchLogsRoleArn"`
	ExcludeVerboseContent *bool                     `json:"excludeVerboseContent"`
	FieldLogLevel         *shared.FieldLogLevelEnum `json:"fieldLogLevel"`
}

type CreateGraphqlAPIRequestBodyOpenIDConnectConfig struct {
	AuthTTL  *int64  `json:"authTTL"`
	ClientID *string `json:"clientId"`
	IatTTL   *int64  `json:"iatTTL"`
	Issuer   *string `json:"issuer"`
}

type CreateGraphqlAPIRequestBodyUserPoolConfig struct {
	AppIDClientRegex *string                   `json:"appIdClientRegex"`
	AwsRegion        *string                   `json:"awsRegion"`
	DefaultAction    *shared.DefaultActionEnum `json:"defaultAction"`
	UserPoolID       *string                   `json:"userPoolId"`
}

type CreateGraphqlAPIRequestBody struct {
	AdditionalAuthenticationProviders []shared.AdditionalAuthenticationProvider          `json:"additionalAuthenticationProviders"`
	AuthenticationType                CreateGraphqlAPIRequestBodyAuthenticationTypeEnum  `json:"authenticationType"`
	LambdaAuthorizerConfig            *CreateGraphqlAPIRequestBodyLambdaAuthorizerConfig `json:"lambdaAuthorizerConfig"`
	LogConfig                         *CreateGraphqlAPIRequestBodyLogConfig              `json:"logConfig"`
	Name                              string                                             `json:"name"`
	OpenIDConnectConfig               *CreateGraphqlAPIRequestBodyOpenIDConnectConfig    `json:"openIDConnectConfig"`
	Tags                              map[string]string                                  `json:"tags"`
	UserPoolConfig                    *CreateGraphqlAPIRequestBodyUserPoolConfig         `json:"userPoolConfig"`
	XrayEnabled                       *bool                                              `json:"xrayEnabled"`
}

type CreateGraphqlAPIRequest struct {
	Headers CreateGraphqlAPIHeaders
	Request CreateGraphqlAPIRequestBody `request:"mediaType=application/json"`
}

type CreateGraphqlAPIResponse struct {
	APILimitExceededException       *interface{}
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateGraphqlAPIResponse        *shared.CreateGraphqlAPIResponse
	InternalFailureException        *interface{}
	LimitExceededException          *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
