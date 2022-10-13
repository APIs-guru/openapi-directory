package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeGatewayRoutePathParams struct {
	GatewayRouteName   string `pathParam:"style=simple,explode=false,name=gatewayRouteName"`
	MeshName           string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualGatewayName string `pathParam:"style=simple,explode=false,name=virtualGatewayName"`
}

type DescribeGatewayRouteQueryParams struct {
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
}

type DescribeGatewayRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeGatewayRouteRequest struct {
	PathParams  DescribeGatewayRoutePathParams
	QueryParams DescribeGatewayRouteQueryParams
	Headers     DescribeGatewayRouteHeaders
}

type DescribeGatewayRouteResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DescribeGatewayRouteOutput   *shared.DescribeGatewayRouteOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
