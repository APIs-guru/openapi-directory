package operations

import (
	"openapi/pkg/models/shared"
)

type StartFlowHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartFlowRequestBody struct {
	FlowName string `json:"flowName"`
}

type StartFlowRequest struct {
	Headers StartFlowHeaders
	Request StartFlowRequestBody `request:"mediaType=application/json"`
}

type StartFlowResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StartFlowResponse             *shared.StartFlowResponse
	StatusCode                    int64
}
