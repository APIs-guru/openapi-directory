package operations

import (
	"openapi/pkg/models/shared"
)

type ListJobsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListJobsXAmzTargetEnum string

const (
	ListJobsXAmzTargetEnumDeviceFarm20150623ListJobs ListJobsXAmzTargetEnum = "DeviceFarm_20150623.ListJobs"
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
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	ListJobsResult          *shared.ListJobsResult
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
