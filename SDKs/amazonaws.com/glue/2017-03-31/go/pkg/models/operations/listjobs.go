package operations

import (
	"openapi/pkg/models/shared"
)

type ListJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListJobsXAmzTargetEnum string

const (
	ListJobsXAmzTargetEnumAwsGlueListJobs ListJobsXAmzTargetEnum = "AWSGlue.ListJobs"
)

type ListJobsHeaders struct {
	XAmzAlgorithm     *string                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListJobsRequest struct {
	QueryParams ListJobsQueryParams
	Headers     ListJobsHeaders
	Request     shared.ListJobsRequest `request:"mediaType=application/json"`
}

type ListJobsResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	ListJobsResponse          *shared.ListJobsResponse
	OperationTimeoutException *interface{}
	StatusCode                int64
}
