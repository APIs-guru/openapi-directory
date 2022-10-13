package operations

import (
	"openapi/pkg/models/shared"
)

type ListTestGridProjectsQueryParams struct {
	MaxResult *string `queryParam:"style=form,explode=true,name=maxResult"`
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListTestGridProjectsXAmzTargetEnum string

const (
	ListTestGridProjectsXAmzTargetEnumDeviceFarm20150623ListTestGridProjects ListTestGridProjectsXAmzTargetEnum = "DeviceFarm_20150623.ListTestGridProjects"
)

type ListTestGridProjectsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTestGridProjectsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTestGridProjectsRequest struct {
	QueryParams ListTestGridProjectsQueryParams
	Headers     ListTestGridProjectsHeaders
	Request     shared.ListTestGridProjectsRequest `request:"mediaType=application/json"`
}

type ListTestGridProjectsResponse struct {
	ArgumentException          *interface{}
	ContentType                string
	InternalServiceException   *interface{}
	ListTestGridProjectsResult *shared.ListTestGridProjectsResult
	StatusCode                 int64
}
