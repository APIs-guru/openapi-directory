package operations

import (
	"openapi/pkg/models/shared"
)

type ListRunsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListRunsXAmzTargetEnum string

const (
	ListRunsXAmzTargetEnumDeviceFarm20150623ListRuns ListRunsXAmzTargetEnum = "DeviceFarm_20150623.ListRuns"
)

type ListRunsHeaders struct {
	XAmzAlgorithm     *string                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRunsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListRunsRequest struct {
	QueryParams ListRunsQueryParams
	Headers     ListRunsHeaders
	Request     shared.ListRunsRequest `request:"mediaType=application/json"`
}

type ListRunsResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	ListRunsResult          *shared.ListRunsResult
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
