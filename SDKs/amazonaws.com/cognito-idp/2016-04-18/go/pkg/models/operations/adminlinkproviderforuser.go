package operations

import (
	"openapi/pkg/models/shared"
)

type AdminLinkProviderForUserXAmzTargetEnum string

const (
	AdminLinkProviderForUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminLinkProviderForUser AdminLinkProviderForUserXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminLinkProviderForUser"
)

type AdminLinkProviderForUserHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminLinkProviderForUserXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AdminLinkProviderForUserRequest struct {
	Headers AdminLinkProviderForUserHeaders
	Request shared.AdminLinkProviderForUserRequest `request:"mediaType=application/json"`
}

type AdminLinkProviderForUserResponse struct {
	AdminLinkProviderForUserResponse map[string]interface{}
	AliasExistsException             *interface{}
	ContentType                      string
	InternalErrorException           *interface{}
	InvalidParameterException        *interface{}
	LimitExceededException           *interface{}
	NotAuthorizedException           *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	TooManyRequestsException         *interface{}
	UserNotFoundException            *interface{}
}
