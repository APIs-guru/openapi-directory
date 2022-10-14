package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDataflowEndpointGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDataflowEndpointGroupRequestBody struct {
	EndpointDetails []shared.EndpointDetails `json:"endpointDetails"`
	Tags            map[string]string        `json:"tags,omitempty"`
}

type CreateDataflowEndpointGroupRequest struct {
	Headers CreateDataflowEndpointGroupHeaders
	Request CreateDataflowEndpointGroupRequestBody `request:"mediaType=application/json"`
}

type CreateDataflowEndpointGroupResponse struct {
	ContentType                     string
	DataflowEndpointGroupIDResponse *shared.DataflowEndpointGroupIDResponse
	DependencyException             *interface{}
	InvalidParameterException       *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
