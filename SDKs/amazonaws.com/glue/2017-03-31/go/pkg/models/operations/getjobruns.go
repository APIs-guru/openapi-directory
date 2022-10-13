package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobRunsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetJobRunsXAmzTargetEnum string

const (
	GetJobRunsXAmzTargetEnumAwsGlueGetJobRuns GetJobRunsXAmzTargetEnum = "AWSGlue.GetJobRuns"
)

type GetJobRunsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetJobRunsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetJobRunsRequest struct {
	QueryParams GetJobRunsQueryParams
	Headers     GetJobRunsHeaders
	Request     shared.GetJobRunsRequest `request:"mediaType=application/json"`
}

type GetJobRunsResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetJobRunsResponse        *shared.GetJobRunsResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
