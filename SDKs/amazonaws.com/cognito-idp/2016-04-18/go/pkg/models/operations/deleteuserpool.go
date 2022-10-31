package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserPoolXAmzTargetEnum string

const (
	DeleteUserPoolXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteUserPool DeleteUserPoolXAmzTargetEnum = "AWSCognitoIdentityProviderService.DeleteUserPool"
)

type DeleteUserPoolHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteUserPoolXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
