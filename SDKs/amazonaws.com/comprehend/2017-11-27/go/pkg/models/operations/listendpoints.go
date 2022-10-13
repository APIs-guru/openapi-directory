package operations

import (
	"openapi/pkg/models/shared"
)

type ListEndpointsXAmzTargetEnum string

const (
	ListEndpointsXAmzTargetEnumComprehend20171127ListEndpoints ListEndpointsXAmzTargetEnum = "Comprehend_20171127.ListEndpoints"
)

type ListEndpointsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEndpointsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListEndpointsRequest struct {
	Headers ListEndpointsHeaders
	Request shared.ListEndpointsRequest `request:"mediaType=application/json"`
}

type ListEndpointsResponse struct {
	ContentType              string
	InternalServerException  *interface{}
	InvalidRequestException  *interface{}
	ListEndpointsResponse    *shared.ListEndpointsResponse
	StatusCode               int64
	TooManyRequestsException *interface{}
}
