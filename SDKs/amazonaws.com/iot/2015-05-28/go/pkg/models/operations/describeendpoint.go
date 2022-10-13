package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEndpointQueryParams struct {
	EndpointType *string `queryParam:"style=form,explode=true,name=endpointType"`
}

type DescribeEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeEndpointRequest struct {
	QueryParams DescribeEndpointQueryParams
	Headers     DescribeEndpointHeaders
}

type DescribeEndpointResponse struct {
	ContentType              string
	DescribeEndpointResponse *shared.DescribeEndpointResponse
	InternalFailureException *interface{}
	InvalidRequestException  *interface{}
	StatusCode               int64
	ThrottlingException      *interface{}
	UnauthorizedException    *interface{}
}
