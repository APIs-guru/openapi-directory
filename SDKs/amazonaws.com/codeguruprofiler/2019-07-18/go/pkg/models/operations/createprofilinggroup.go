package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProfilingGroupQueryParams struct {
	ClientToken string `queryParam:"style=form,explode=true,name=clientToken"`
}

type CreateProfilingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateProfilingGroupRequestBodyAgentOrchestrationConfig struct {
	ProfilingEnabled *bool `json:"profilingEnabled,omitempty"`
}

type CreateProfilingGroupRequestBodyComputePlatformEnum string

const (
	CreateProfilingGroupRequestBodyComputePlatformEnumDefault   CreateProfilingGroupRequestBodyComputePlatformEnum = "Default"
	CreateProfilingGroupRequestBodyComputePlatformEnumAwsLambda CreateProfilingGroupRequestBodyComputePlatformEnum = "AWSLambda"
)

type CreateProfilingGroupRequestBody struct {
	AgentOrchestrationConfig *CreateProfilingGroupRequestBodyAgentOrchestrationConfig `json:"agentOrchestrationConfig,omitempty"`
	ComputePlatform          *CreateProfilingGroupRequestBodyComputePlatformEnum      `json:"computePlatform,omitempty"`
	ProfilingGroupName       string                                                   `json:"profilingGroupName"`
	Tags                     map[string]string                                        `json:"tags,omitempty"`
}

type CreateProfilingGroupRequest struct {
	QueryParams CreateProfilingGroupQueryParams
	Headers     CreateProfilingGroupHeaders
	Request     CreateProfilingGroupRequestBody `request:"mediaType=application/json"`
}

type CreateProfilingGroupResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	CreateProfilingGroupResponse  *shared.CreateProfilingGroupResponse
	InternalServerException       *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
