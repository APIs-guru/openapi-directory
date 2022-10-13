package operations

import (
	"openapi/pkg/models/shared"
)

type ListTestsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListTestsXAmzTargetEnum string

const (
	ListTestsXAmzTargetEnumDeviceFarm20150623ListTests ListTestsXAmzTargetEnum = "DeviceFarm_20150623.ListTests"
)

type ListTestsHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTestsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTestsRequest struct {
	QueryParams ListTestsQueryParams
	Headers     ListTestsHeaders
	Request     shared.ListTestsRequest `request:"mediaType=application/json"`
}

type ListTestsResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	ListTestsResult         *shared.ListTestsResult
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
