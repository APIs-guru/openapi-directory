package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserAttributesXAmzTargetEnum string

const (
	DeleteUserAttributesXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteUserAttributes DeleteUserAttributesXAmzTargetEnum = "AWSCognitoIdentityProviderService.DeleteUserAttributes"
)

type DeleteUserAttributesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteUserAttributesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteUserAttributesRequest struct {
	Headers DeleteUserAttributesHeaders
	Request shared.DeleteUserAttributesRequest `request:"mediaType=application/json"`
}

type DeleteUserAttributesResponse struct {
	ContentType                    string
	DeleteUserAttributesResponse   map[string]interface{}
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	NotAuthorizedException         *interface{}
	PasswordResetRequiredException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
	UserNotConfirmedException      *interface{}
	UserNotFoundException          *interface{}
}
