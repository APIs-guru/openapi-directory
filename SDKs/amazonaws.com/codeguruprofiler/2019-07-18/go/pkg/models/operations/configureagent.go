package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureAgentPathParams struct {
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type ConfigureAgentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ConfigureAgentRequestBody struct {
	FleetInstanceID *string           `json:"fleetInstanceId,omitempty"`
	Metadata        map[string]string `json:"metadata,omitempty"`
}

type ConfigureAgentRequest struct {
	PathParams ConfigureAgentPathParams
	Headers    ConfigureAgentHeaders
	Request    ConfigureAgentRequestBody `request:"mediaType=application/json"`
}

type ConfigureAgentResponse struct {
	ConfigureAgentResponse    *shared.ConfigureAgentResponse
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
