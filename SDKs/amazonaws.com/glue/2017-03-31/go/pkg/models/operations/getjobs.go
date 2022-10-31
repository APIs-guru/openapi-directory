package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetJobsXAmzTargetEnum string

const (
	GetJobsXAmzTargetEnumAwsGlueGetJobs GetJobsXAmzTargetEnum = "AWSGlue.GetJobs"
)

type GetJobsHeaders struct {
	XAmzAlgorithm     *string               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetJobsRequest struct {
	QueryParams GetJobsQueryParams
	Headers     GetJobsHeaders
	Request     shared.GetJobsRequest `request:"mediaType=application/json"`
}

type GetJobsResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetJobsResponse           *shared.GetJobsResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
