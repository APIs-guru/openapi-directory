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
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTestGridProjectsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
