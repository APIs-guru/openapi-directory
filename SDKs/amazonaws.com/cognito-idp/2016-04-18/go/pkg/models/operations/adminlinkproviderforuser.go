package operations

import (
	"openapi/pkg/models/shared"
)

type AdminLinkProviderForUserXAmzTargetEnum string

const (
	AdminLinkProviderForUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminLinkProviderForUser AdminLinkProviderForUserXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminLinkProviderForUser"
)

type AdminLinkProviderForUserHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminLinkProviderForUserXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
