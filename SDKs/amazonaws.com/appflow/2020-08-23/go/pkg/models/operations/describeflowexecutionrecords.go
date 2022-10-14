package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFlowExecutionRecordsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeFlowExecutionRecordsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeFlowExecutionRecordsRequestBody struct {
	FlowName   string  `json:"flowName"`
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
}

type DescribeFlowExecutionRecordsRequest struct {
	QueryParams DescribeFlowExecutionRecordsQueryParams
	Headers     DescribeFlowExecutionRecordsHeaders
	Request     DescribeFlowExecutionRecordsRequestBody `request:"mediaType=application/json"`
}

type DescribeFlowExecutionRecordsResponse struct {
	ContentType                          string
	DescribeFlowExecutionRecordsResponse *shared.DescribeFlowExecutionRecordsResponse
	InternalServerException              *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	ValidationException                  *interface{}
}
