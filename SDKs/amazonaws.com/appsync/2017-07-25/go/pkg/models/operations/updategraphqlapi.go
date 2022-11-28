package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGraphqlAPIPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type UpdateGraphqlAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum string

const (
	UpdateGraphqlAPIRequestBodyAuthenticationTypeEnumAPIKey                 UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum = "API_KEY"
	UpdateGraphqlAPIRequestBodyAuthenticationTypeEnumAwsIam                 UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum = "AWS_IAM"
	UpdateGraphqlAPIRequestBodyAuthenticationTypeEnumAmazonCognitoUserPools UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum = "AMAZON_COGNITO_USER_POOLS"
	UpdateGraphqlAPIRequestBodyAuthenticationTypeEnumOpenidConnect          UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum = "OPENID_CONNECT"
	UpdateGraphqlAPIRequestBodyAuthenticationTypeEnumAwsLambda              UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum = "AWS_LAMBDA"
)

// UpdateGraphqlAPIRequestBodyLambdaAuthorizerConfig
// A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
type UpdateGraphqlAPIRequestBodyLambdaAuthorizerConfig struct {
	AuthorizerResultTTLInSeconds *int64  `json:"authorizerResultTtlInSeconds,omitempty"`
	AuthorizerURI                *string `json:"authorizerUri,omitempty"`
	IdentityValidationExpression *string `json:"identityValidationExpression,omitempty"`
}

// UpdateGraphqlAPIRequestBodyLogConfig
// The CloudWatch Logs configuration.
type UpdateGraphqlAPIRequestBodyLogConfig struct {
	CloudWatchLogsRoleArn *string                   `json:"cloudWatchLogsRoleArn,omitempty"`
	ExcludeVerboseContent *bool                     `json:"excludeVerboseContent,omitempty"`
	FieldLogLevel         *shared.FieldLogLevelEnum `json:"fieldLogLevel,omitempty"`
}

// UpdateGraphqlAPIRequestBodyOpenIDConnectConfig
// Describes an OpenID Connect configuration.
type UpdateGraphqlAPIRequestBodyOpenIDConnectConfig struct {
	AuthTTL  *int64  `json:"authTTL,omitempty"`
	ClientID *string `json:"clientId,omitempty"`
	IatTTL   *int64  `json:"iatTTL,omitempty"`
	Issuer   *string `json:"issuer,omitempty"`
}

// UpdateGraphqlAPIRequestBodyUserPoolConfig
// Describes an Amazon Cognito user pool configuration.
type UpdateGraphqlAPIRequestBodyUserPoolConfig struct {
	AppIDClientRegex *string                   `json:"appIdClientRegex,omitempty"`
	AwsRegion        *string                   `json:"awsRegion,omitempty"`
	DefaultAction    *shared.DefaultActionEnum `json:"defaultAction,omitempty"`
	UserPoolID       *string                   `json:"userPoolId,omitempty"`
}

type UpdateGraphqlAPIRequestBody struct {
	AdditionalAuthenticationProviders []shared.AdditionalAuthenticationProvider          `json:"additionalAuthenticationProviders,omitempty"`
	AuthenticationType                *UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum `json:"authenticationType,omitempty"`
	LambdaAuthorizerConfig            *UpdateGraphqlAPIRequestBodyLambdaAuthorizerConfig `json:"lambdaAuthorizerConfig,omitempty"`
	LogConfig                         *UpdateGraphqlAPIRequestBodyLogConfig              `json:"logConfig,omitempty"`
	Name                              string                                             `json:"name"`
	OpenIDConnectConfig               *UpdateGraphqlAPIRequestBodyOpenIDConnectConfig    `json:"openIDConnectConfig,omitempty"`
	UserPoolConfig                    *UpdateGraphqlAPIRequestBodyUserPoolConfig         `json:"userPoolConfig,omitempty"`
	XrayEnabled                       *bool                                              `json:"xrayEnabled,omitempty"`
}

type UpdateGraphqlAPIRequest struct {
	PathParams UpdateGraphqlAPIPathParams
	Headers    UpdateGraphqlAPIHeaders
	Request    UpdateGraphqlAPIRequestBody `request:"mediaType=application/json"`
}

type UpdateGraphqlAPIResponse struct {
	AccessDeniedException           *interface{}
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
	UpdateGraphqlAPIResponse        *shared.UpdateGraphqlAPIResponse
}
