package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRoutePathParams struct {
	MeshName          string `pathParam:"style=simple,explode=false,name=meshName"`
	RouteName         string `pathParam:"style=simple,explode=false,name=routeName"`
	VirtualRouterName string `pathParam:"style=simple,explode=false,name=virtualRouterName"`
}

type DescribeRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeRouteRequest struct {
	PathParams DescribeRoutePathParams
	Headers    DescribeRouteHeaders
}

type DescribeRouteResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DescribeRouteOutput          *shared.DescribeRouteOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
