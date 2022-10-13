package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFlowHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeFlowRequestBody struct {
	FlowName string `json:"flowName"`
}

type DescribeFlowRequest struct {
	Headers DescribeFlowHeaders
	Request DescribeFlowRequestBody `request:"mediaType=application/json"`
}

type DescribeFlowResponse struct {
	ContentType               string
	DescribeFlowResponse      *shared.DescribeFlowResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
