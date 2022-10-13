package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProfilingGroupPathParams struct {
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type UpdateProfilingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateProfilingGroupRequestBodyAgentOrchestrationConfig struct {
	ProfilingEnabled *bool `json:"profilingEnabled"`
}

type UpdateProfilingGroupRequestBody struct {
	AgentOrchestrationConfig UpdateProfilingGroupRequestBodyAgentOrchestrationConfig `json:"agentOrchestrationConfig"`
}

type UpdateProfilingGroupRequest struct {
	PathParams UpdateProfilingGroupPathParams
	Headers    UpdateProfilingGroupHeaders
	Request    UpdateProfilingGroupRequestBody `request:"mediaType=application/json"`
}

type UpdateProfilingGroupResponse struct {
	ConflictException            *interface{}
	ContentType                  string
	InternalServerException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	UpdateProfilingGroupResponse *shared.UpdateProfilingGroupResponse
	ValidationException          *interface{}
}
