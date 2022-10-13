package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateResourceServerXAmzTargetEnum string

const (
	UpdateResourceServerXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateResourceServer UpdateResourceServerXAmzTargetEnum = "AWSCognitoIdentityProviderService.UpdateResourceServer"
)

type UpdateResourceServerHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateResourceServerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateResourceServerRequest struct {
	Headers UpdateResourceServerHeaders
	Request shared.UpdateResourceServerRequest `request:"mediaType=application/json"`
}

type UpdateResourceServerResponse struct {
	ContentType                  string
	InternalErrorException       *interface{}
	InvalidParameterException    *interface{}
	NotAuthorizedException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateResourceServerResponse *shared.UpdateResourceServerResponse
}
