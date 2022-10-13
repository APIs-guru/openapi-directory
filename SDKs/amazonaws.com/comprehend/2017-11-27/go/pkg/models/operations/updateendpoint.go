package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEndpointXAmzTargetEnum string

const (
	UpdateEndpointXAmzTargetEnumComprehend20171127UpdateEndpoint UpdateEndpointXAmzTargetEnum = "Comprehend_20171127.UpdateEndpoint"
)

type UpdateEndpointHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateEndpointRequest struct {
	Headers UpdateEndpointHeaders
	Request shared.UpdateEndpointRequest `request:"mediaType=application/json"`
}

type UpdateEndpointResponse struct {
	ContentType                    string
	InternalServerException        *interface{}
	InvalidRequestException        *interface{}
	ResourceInUseException         *interface{}
	ResourceLimitExceededException *interface{}
	ResourceNotFoundException      *interface{}
	ResourceUnavailableException   *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
	UpdateEndpointResponse         map[string]interface{}
}
