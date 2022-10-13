package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeJobExecutionPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type DescribeJobExecutionQueryParams struct {
	ExecutionNumber    *int64 `queryParam:"style=form,explode=true,name=executionNumber"`
	IncludeJobDocument *bool  `queryParam:"style=form,explode=true,name=includeJobDocument"`
}

type DescribeJobExecutionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeJobExecutionRequest struct {
	PathParams  DescribeJobExecutionPathParams
	QueryParams DescribeJobExecutionQueryParams
	Headers     DescribeJobExecutionHeaders
}

type DescribeJobExecutionResponse struct {
	CertificateValidationException *interface{}
	ContentType                    string
	DescribeJobExecutionResponse   *shared.DescribeJobExecutionResponse
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	TerminalStateException         *interface{}
	ThrottlingException            *interface{}
}
