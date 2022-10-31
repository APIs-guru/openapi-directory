package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGatewayRoutePathParams struct {
	GatewayRouteName   string `pathParam:"style=simple,explode=false,name=gatewayRouteName"`
	MeshName           string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualGatewayName string `pathParam:"style=simple,explode=false,name=virtualGatewayName"`
}

type UpdateGatewayRouteQueryParams struct {
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
}

type UpdateGatewayRouteHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateGatewayRouteRequestBodySpec struct {
	GrpcRoute  *shared.GrpcGatewayRoute `json:"grpcRoute,omitempty"`
	Http2Route *shared.HTTPGatewayRoute `json:"http2Route,omitempty"`
	HTTPRoute  *shared.HTTPGatewayRoute `json:"httpRoute,omitempty"`
	Priority   *int64                   `json:"priority,omitempty"`
}

type UpdateGatewayRouteRequestBody struct {
	ClientToken *string                           `json:"clientToken,omitempty"`
	Spec        UpdateGatewayRouteRequestBodySpec `json:"spec"`
}

type UpdateGatewayRouteRequest struct {
	PathParams  UpdateGatewayRoutePathParams
	QueryParams UpdateGatewayRouteQueryParams
	Headers     UpdateGatewayRouteHeaders
	Request     UpdateGatewayRouteRequestBody `request:"mediaType=application/json"`
}

type UpdateGatewayRouteResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	LimitExceededException       *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateGatewayRouteOutput     *shared.UpdateGatewayRouteOutput
}
