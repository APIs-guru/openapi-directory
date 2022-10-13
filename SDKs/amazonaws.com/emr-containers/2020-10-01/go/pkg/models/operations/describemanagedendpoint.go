package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeManagedEndpointPathParams struct {
	EndpointID       string `pathParam:"style=simple,explode=false,name=endpointId"`
	VirtualClusterID string `pathParam:"style=simple,explode=false,name=virtualClusterId"`
}

type DescribeManagedEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeManagedEndpointRequest struct {
	PathParams DescribeManagedEndpointPathParams
	Headers    DescribeManagedEndpointHeaders
}

type DescribeManagedEndpointResponse struct {
	ContentType                     string
	DescribeManagedEndpointResponse *shared.DescribeManagedEndpointResponse
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
