package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGatewayRoutePathParams struct {
	GatewayRouteName   string `pathParam:"style=simple,explode=false,name=gatewayRouteName"`
	MeshName           string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualGatewayName string `pathParam:"style=simple,explode=false,name=virtualGatewayName"`
}

type DeleteGatewayRouteQueryParams struct {
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
}

type DeleteGatewayRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteGatewayRouteRequest struct {
	PathParams  DeleteGatewayRoutePathParams
	QueryParams DeleteGatewayRouteQueryParams
	Headers     DeleteGatewayRouteHeaders
}

type DeleteGatewayRouteResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DeleteGatewayRouteOutput     *shared.DeleteGatewayRouteOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ResourceInUseException       *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
