package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGraphqlAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
	AuthorizerResultTTLInSeconds *int64  `json:"authorizerResultTtlInSeconds,omitempty"`
	AuthorizerURI                *string `json:"authorizerUri,omitempty"`
	IdentityValidationExpression *string `json:"identityValidationExpression,omitempty"`
}

type CreateGraphqlAPIRequestBodyLogConfig struct {
	CloudWatchLogsRoleArn *string                   `json:"cloudWatchLogsRoleArn,omitempty"`
	ExcludeVerboseContent *bool                     `json:"excludeVerboseContent,omitempty"`
	FieldLogLevel         *shared.FieldLogLevelEnum `json:"fieldLogLevel,omitempty"`
}

type CreateGraphqlAPIRequestBodyOpenIDConnectConfig struct {
	AuthTTL  *int64  `json:"authTTL,omitempty"`
	ClientID *string `json:"clientId,omitempty"`
	IatTTL   *int64  `json:"iatTTL,omitempty"`
	Issuer   *string `json:"issuer,omitempty"`
}

type CreateGraphqlAPIRequestBodyUserPoolConfig struct {
	AppIDClientRegex *string                   `json:"appIdClientRegex,omitempty"`
	AwsRegion        *string                   `json:"awsRegion,omitempty"`
	DefaultAction    *shared.DefaultActionEnum `json:"defaultAction,omitempty"`
	UserPoolID       *string                   `json:"userPoolId,omitempty"`
}

type CreateGraphqlAPIRequestBody struct {
	AdditionalAuthenticationProviders []shared.AdditionalAuthenticationProvider          `json:"additionalAuthenticationProviders,omitempty"`
	AuthenticationType                CreateGraphqlAPIRequestBodyAuthenticationTypeEnum  `json:"authenticationType"`
	LambdaAuthorizerConfig            *CreateGraphqlAPIRequestBodyLambdaAuthorizerConfig `json:"lambdaAuthorizerConfig,omitempty"`
	LogConfig                         *CreateGraphqlAPIRequestBodyLogConfig              `json:"logConfig,omitempty"`
	Name                              string                                             `json:"name"`
	OpenIDConnectConfig               *CreateGraphqlAPIRequestBodyOpenIDConnectConfig    `json:"openIDConnectConfig,omitempty"`
	Tags                              map[string]string                                  `json:"tags,omitempty"`
	UserPoolConfig                    *CreateGraphqlAPIRequestBodyUserPoolConfig         `json:"userPoolConfig,omitempty"`
	XrayEnabled                       *bool                                              `json:"xrayEnabled,omitempty"`
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
