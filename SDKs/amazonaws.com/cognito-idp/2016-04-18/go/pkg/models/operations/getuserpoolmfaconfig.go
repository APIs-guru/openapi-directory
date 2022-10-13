package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPoolMfaConfigXAmzTargetEnum string

const (
	GetUserPoolMfaConfigXAmzTargetEnumAwsCognitoIdentityProviderServiceGetUserPoolMfaConfig GetUserPoolMfaConfigXAmzTargetEnum = "AWSCognitoIdentityProviderService.GetUserPoolMfaConfig"
)

type GetUserPoolMfaConfigHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetUserPoolMfaConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetUserPoolMfaConfigRequest struct {
	Headers GetUserPoolMfaConfigHeaders
	Request shared.GetUserPoolMfaConfigRequest `request:"mediaType=application/json"`
}

type GetUserPoolMfaConfigResponse struct {
	ContentType                  string
	GetUserPoolMfaConfigResponse *shared.GetUserPoolMfaConfigResponse
	InternalErrorException       *interface{}
	InvalidParameterException    *interface{}
	NotAuthorizedException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
