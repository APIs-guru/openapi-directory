package operations

import (
	"openapi/pkg/models/shared"
)

type ListTestGridSessionsQueryParams struct {
	MaxResult *string `queryParam:"style=form,explode=true,name=maxResult"`
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListTestGridSessionsXAmzTargetEnum string

const (
	ListTestGridSessionsXAmzTargetEnumDeviceFarm20150623ListTestGridSessions ListTestGridSessionsXAmzTargetEnum = "DeviceFarm_20150623.ListTestGridSessions"
)

type ListTestGridSessionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTestGridSessionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTestGridSessionsRequest struct {
	QueryParams ListTestGridSessionsQueryParams
	Headers     ListTestGridSessionsHeaders
	Request     shared.ListTestGridSessionsRequest `request:"mediaType=application/json"`
}

type ListTestGridSessionsResponse struct {
	ArgumentException          *interface{}
	ContentType                string
	InternalServiceException   *interface{}
	ListTestGridSessionsResult *shared.ListTestGridSessionsResult
	NotFoundException          *interface{}
	StatusCode                 int64
}
