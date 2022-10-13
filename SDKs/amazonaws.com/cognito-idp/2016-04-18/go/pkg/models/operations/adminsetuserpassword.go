package operations

import (
	"openapi/pkg/models/shared"
)

type AdminSetUserPasswordXAmzTargetEnum string

const (
	AdminSetUserPasswordXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminSetUserPassword AdminSetUserPasswordXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminSetUserPassword"
)

type AdminSetUserPasswordHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminSetUserPasswordXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AdminSetUserPasswordRequest struct {
	Headers AdminSetUserPasswordHeaders
	Request shared.AdminSetUserPasswordRequest `request:"mediaType=application/json"`
}

type AdminSetUserPasswordResponse struct {
	AdminSetUserPasswordResponse map[string]interface{}
	ContentType                  string
	InternalErrorException       *interface{}
	InvalidParameterException    *interface{}
	InvalidPasswordException     *interface{}
	NotAuthorizedException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UserNotFoundException        *interface{}
}
