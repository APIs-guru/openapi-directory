package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGraphqlAPIPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type UpdateGraphqlAPIHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum string

const (
	UpdateGraphqlAPIRequestBodyAuthenticationTypeEnumAPIKey                 UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum = "API_KEY"
	UpdateGraphqlAPIRequestBodyAuthenticationTypeEnumAwsIam                 UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum = "AWS_IAM"
	UpdateGraphqlAPIRequestBodyAuthenticationTypeEnumAmazonCognitoUserPools UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum = "AMAZON_COGNITO_USER_POOLS"
	UpdateGraphqlAPIRequestBodyAuthenticationTypeEnumOpenidConnect          UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum = "OPENID_CONNECT"
	UpdateGraphqlAPIRequestBodyAuthenticationTypeEnumAwsLambda              UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum = "AWS_LAMBDA"
)

type UpdateGraphqlAPIRequestBodyLambdaAuthorizerConfig struct {
	AuthorizerResultTTLInSeconds *int64  `json:"authorizerResultTtlInSeconds"`
	AuthorizerURI                *string `json:"authorizerUri"`
	IdentityValidationExpression *string `json:"identityValidationExpression"`
}

type UpdateGraphqlAPIRequestBodyLogConfig struct {
	CloudWatchLogsRoleArn *string                   `json:"cloudWatchLogsRoleArn"`
	ExcludeVerboseContent *bool                     `json:"excludeVerboseContent"`
	FieldLogLevel         *shared.FieldLogLevelEnum `json:"fieldLogLevel"`
}

type UpdateGraphqlAPIRequestBodyOpenIDConnectConfig struct {
	AuthTTL  *int64  `json:"authTTL"`
	ClientID *string `json:"clientId"`
	IatTTL   *int64  `json:"iatTTL"`
	Issuer   *string `json:"issuer"`
}

type UpdateGraphqlAPIRequestBodyUserPoolConfig struct {
	AppIDClientRegex *string                   `json:"appIdClientRegex"`
	AwsRegion        *string                   `json:"awsRegion"`
	DefaultAction    *shared.DefaultActionEnum `json:"defaultAction"`
	UserPoolID       *string                   `json:"userPoolId"`
}

type UpdateGraphqlAPIRequestBody struct {
	AdditionalAuthenticationProviders []shared.AdditionalAuthenticationProvider          `json:"additionalAuthenticationProviders"`
	AuthenticationType                *UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum `json:"authenticationType"`
	LambdaAuthorizerConfig            *UpdateGraphqlAPIRequestBodyLambdaAuthorizerConfig `json:"lambdaAuthorizerConfig"`
	LogConfig                         *UpdateGraphqlAPIRequestBodyLogConfig              `json:"logConfig"`
	Name                              string                                             `json:"name"`
	OpenIDConnectConfig               *UpdateGraphqlAPIRequestBodyOpenIDConnectConfig    `json:"openIDConnectConfig"`
	UserPoolConfig                    *UpdateGraphqlAPIRequestBodyUserPoolConfig         `json:"userPoolConfig"`
	XrayEnabled                       *bool                                              `json:"xrayEnabled"`
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
