package operations

import (
	"openapi/pkg/models/shared"
)

type AdminDisableProviderForUserXAmzTargetEnum string

const (
	AdminDisableProviderForUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminDisableProviderForUser AdminDisableProviderForUserXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminDisableProviderForUser"
)

type AdminDisableProviderForUserHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminDisableProviderForUserXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AdminDisableProviderForUserRequest struct {
	Headers AdminDisableProviderForUserHeaders
	Request shared.AdminDisableProviderForUserRequest `request:"mediaType=application/json"`
}

type AdminDisableProviderForUserResponse struct {
	AdminDisableProviderForUserResponse map[string]interface{}
	AliasExistsException                *interface{}
	ContentType                         string
	InternalErrorException              *interface{}
	InvalidParameterException           *interface{}
	NotAuthorizedException              *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	TooManyRequestsException            *interface{}
	UserNotFoundException               *interface{}
}
