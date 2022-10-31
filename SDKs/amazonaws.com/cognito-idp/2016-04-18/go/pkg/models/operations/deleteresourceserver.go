package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResourceServerXAmzTargetEnum string

const (
	DeleteResourceServerXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteResourceServer DeleteResourceServerXAmzTargetEnum = "AWSCognitoIdentityProviderService.DeleteResourceServer"
)

type DeleteResourceServerHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteResourceServerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteResourceServerRequest struct {
	Headers DeleteResourceServerHeaders
	Request shared.DeleteResourceServerRequest `request:"mediaType=application/json"`
}

type DeleteResourceServerResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
