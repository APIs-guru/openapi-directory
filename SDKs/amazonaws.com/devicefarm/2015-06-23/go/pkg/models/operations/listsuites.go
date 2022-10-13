package operations

import (
	"openapi/pkg/models/shared"
)

type ListSuitesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListSuitesXAmzTargetEnum string

const (
	ListSuitesXAmzTargetEnumDeviceFarm20150623ListSuites ListSuitesXAmzTargetEnum = "DeviceFarm_20150623.ListSuites"
)

type ListSuitesHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSuitesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListSuitesRequest struct {
	QueryParams ListSuitesQueryParams
	Headers     ListSuitesHeaders
	Request     shared.ListSuitesRequest `request:"mediaType=application/json"`
}

type ListSuitesResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	ListSuitesResult        *shared.ListSuitesResult
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
