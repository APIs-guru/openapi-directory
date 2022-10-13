package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEndpointXAmzTargetEnum string

const (
	CreateEndpointXAmzTargetEnumComprehend20171127CreateEndpoint CreateEndpointXAmzTargetEnum = "Comprehend_20171127.CreateEndpoint"
)

type CreateEndpointHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateEndpointRequest struct {
	Headers CreateEndpointHeaders
	Request shared.CreateEndpointRequest `request:"mediaType=application/json"`
}

type CreateEndpointResponse struct {
	ContentType                    string
	CreateEndpointResponse         *shared.CreateEndpointResponse
	InternalServerException        *interface{}
	InvalidRequestException        *interface{}
	ResourceInUseException         *interface{}
	ResourceLimitExceededException *interface{}
	ResourceNotFoundException      *interface{}
	ResourceUnavailableException   *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
	TooManyTagsException           *interface{}
}
