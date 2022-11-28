package operations

import (
	"openapi/pkg/models/shared"
)

type SetIdentityPoolConfigurationPathParams struct {
	IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
}

type SetIdentityPoolConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// SetIdentityPoolConfigurationRequestBodyCognitoStreams
// Configuration options for configure Cognito streams.
type SetIdentityPoolConfigurationRequestBodyCognitoStreams struct {
	RoleArn         *string                     `json:"RoleArn,omitempty"`
	StreamName      *string                     `json:"StreamName,omitempty"`
	StreamingStatus *shared.StreamingStatusEnum `json:"StreamingStatus,omitempty"`
}

// SetIdentityPoolConfigurationRequestBodyPushSync
// Configuration options to be applied to the identity pool.
type SetIdentityPoolConfigurationRequestBodyPushSync struct {
	ApplicationArns []string `json:"ApplicationArns,omitempty"`
	RoleArn         *string  `json:"RoleArn,omitempty"`
}

type SetIdentityPoolConfigurationRequestBody struct {
	CognitoStreams *SetIdentityPoolConfigurationRequestBodyCognitoStreams `json:"CognitoStreams,omitempty"`
	PushSync       *SetIdentityPoolConfigurationRequestBodyPushSync       `json:"PushSync,omitempty"`
}

type SetIdentityPoolConfigurationRequest struct {
	PathParams SetIdentityPoolConfigurationPathParams
	Headers    SetIdentityPoolConfigurationHeaders
	Request    SetIdentityPoolConfigurationRequestBody `request:"mediaType=application/json"`
}

type SetIdentityPoolConfigurationResponse struct {
	ConcurrentModificationException      *interface{}
	ContentType                          string
	InternalErrorException               *interface{}
	InvalidParameterException            *interface{}
	NotAuthorizedException               *interface{}
	ResourceNotFoundException            *interface{}
	SetIdentityPoolConfigurationResponse *shared.SetIdentityPoolConfigurationResponse
	StatusCode                           int64
	TooManyRequestsException             *interface{}
}
