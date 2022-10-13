package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteManagedEndpointPathParams struct {
	EndpointID       string `pathParam:"style=simple,explode=false,name=endpointId"`
	VirtualClusterID string `pathParam:"style=simple,explode=false,name=virtualClusterId"`
}

type DeleteManagedEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteManagedEndpointRequest struct {
	PathParams DeleteManagedEndpointPathParams
	Headers    DeleteManagedEndpointHeaders
}

type DeleteManagedEndpointResponse struct {
	ContentType                   string
	DeleteManagedEndpointResponse *shared.DeleteManagedEndpointResponse
	InternalServerException       *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
