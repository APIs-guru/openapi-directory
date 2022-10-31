package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResourceServerXAmzTargetEnum string

const (
	CreateResourceServerXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateResourceServer CreateResourceServerXAmzTargetEnum = "AWSCognitoIdentityProviderService.CreateResourceServer"
)

type CreateResourceServerHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateResourceServerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateResourceServerRequest struct {
	Headers CreateResourceServerHeaders
	Request shared.CreateResourceServerRequest `request:"mediaType=application/json"`
}

type CreateResourceServerResponse struct {
	ContentType                  string
	CreateResourceServerResponse *shared.CreateResourceServerResponse
	InternalErrorException       *interface{}
	InvalidParameterException    *interface{}
	LimitExceededException       *interface{}
	NotAuthorizedException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
