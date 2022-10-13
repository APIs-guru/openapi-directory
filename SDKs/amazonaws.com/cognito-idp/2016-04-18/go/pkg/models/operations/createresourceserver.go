package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResourceServerXAmzTargetEnum string

const (
	CreateResourceServerXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateResourceServer CreateResourceServerXAmzTargetEnum = "AWSCognitoIdentityProviderService.CreateResourceServer"
)

type CreateResourceServerHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateResourceServerXAmzTargetEnum `header:"name=X-Amz-Target"`
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
