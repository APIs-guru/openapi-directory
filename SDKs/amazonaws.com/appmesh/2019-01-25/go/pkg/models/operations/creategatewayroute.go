package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGatewayRoutePathParams struct {
	MeshName           string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualGatewayName string `pathParam:"style=simple,explode=false,name=virtualGatewayName"`
}

type CreateGatewayRouteQueryParams struct {
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
}

type CreateGatewayRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateGatewayRouteRequestBodySpec struct {
	GrpcRoute  *shared.GrpcGatewayRoute `json:"grpcRoute,omitempty"`
	Http2Route *shared.HTTPGatewayRoute `json:"http2Route,omitempty"`
	HTTPRoute  *shared.HTTPGatewayRoute `json:"httpRoute,omitempty"`
	Priority   *int64                   `json:"priority,omitempty"`
}

type CreateGatewayRouteRequestBody struct {
	ClientToken      *string                           `json:"clientToken,omitempty"`
	GatewayRouteName string                            `json:"gatewayRouteName"`
	Spec             CreateGatewayRouteRequestBodySpec `json:"spec"`
	Tags             []shared.TagRef                   `json:"tags,omitempty"`
}

type CreateGatewayRouteRequest struct {
	PathParams  CreateGatewayRoutePathParams
	QueryParams CreateGatewayRouteQueryParams
	Headers     CreateGatewayRouteHeaders
	Request     CreateGatewayRouteRequestBody `request:"mediaType=application/json"`
}

type CreateGatewayRouteResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	CreateGatewayRouteOutput     *shared.CreateGatewayRouteOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	LimitExceededException       *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
