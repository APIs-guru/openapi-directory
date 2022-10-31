package operations

import (
	"openapi/pkg/models/shared"
)

type ListProjectsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListProjectsXAmzTargetEnum string

const (
	ListProjectsXAmzTargetEnumDeviceFarm20150623ListProjects ListProjectsXAmzTargetEnum = "DeviceFarm_20150623.ListProjects"
)

type ListProjectsHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListProjectsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListProjectsRequest struct {
	QueryParams ListProjectsQueryParams
	Headers     ListProjectsHeaders
	Request     shared.ListProjectsRequest `request:"mediaType=application/json"`
}

type ListProjectsResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	ListProjectsResult      *shared.ListProjectsResult
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
