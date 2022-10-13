package operations

import (
	"openapi/pkg/models/shared"
)

type StopFlowHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StopFlowRequestBody struct {
	FlowName string `json:"flowName"`
}

type StopFlowRequest struct {
	Headers StopFlowHeaders
	Request StopFlowRequestBody `request:"mediaType=application/json"`
}

type StopFlowResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	StopFlowResponse              *shared.StopFlowResponse
	UnsupportedOperationException *interface{}
}
