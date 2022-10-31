package operations

import (
	"openapi/pkg/models/shared"
)

type GetMlTaskRunsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetMlTaskRunsXAmzTargetEnum string

const (
	GetMlTaskRunsXAmzTargetEnumAwsGlueGetMlTaskRuns GetMlTaskRunsXAmzTargetEnum = "AWSGlue.GetMLTaskRuns"
)

type GetMlTaskRunsHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMlTaskRunsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetMlTaskRunsRequest struct {
	QueryParams GetMlTaskRunsQueryParams
	Headers     GetMlTaskRunsHeaders
	Request     shared.GetMlTaskRunsRequest `request:"mediaType=application/json"`
}

type GetMlTaskRunsResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetMlTaskRunsResponse     *shared.GetMlTaskRunsResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
