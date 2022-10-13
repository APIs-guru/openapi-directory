package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserPoolXAmzTargetEnum string

const (
	DeleteUserPoolXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteUserPool DeleteUserPoolXAmzTargetEnum = "AWSCognitoIdentityProviderService.DeleteUserPool"
)

type DeleteUserPoolHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteUserPoolXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteUserPoolRequest struct {
	Headers DeleteUserPoolHeaders
	Request shared.DeleteUserPoolRequest `request:"mediaType=application/json"`
}

type DeleteUserPoolResponse struct {
	ContentType                   string
	InternalErrorException        *interface{}
	InvalidParameterException     *interface{}
	NotAuthorizedException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	TooManyRequestsException      *interface{}
	UserImportInProgressException *interface{}
}
