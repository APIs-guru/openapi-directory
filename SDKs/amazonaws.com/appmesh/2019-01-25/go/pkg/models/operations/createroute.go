package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRoutePathParams struct {
	MeshName          string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualRouterName string `pathParam:"style=simple,explode=false,name=virtualRouterName"`
}

type CreateRouteQueryParams struct {
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
}

type CreateRouteHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateRouteRequestBodySpec struct {
	GrpcRoute  *shared.GrpcRoute `json:"grpcRoute,omitempty"`
	Http2Route *shared.HTTPRoute `json:"http2Route,omitempty"`
	HTTPRoute  *shared.HTTPRoute `json:"httpRoute,omitempty"`
	Priority   *int64            `json:"priority,omitempty"`
	TCPRoute   *shared.TCPRoute  `json:"tcpRoute,omitempty"`
}

type CreateRouteRequestBody struct {
	ClientToken *string                    `json:"clientToken,omitempty"`
	RouteName   string                     `json:"routeName"`
	Spec        CreateRouteRequestBodySpec `json:"spec"`
	Tags        []shared.TagRef            `json:"tags,omitempty"`
}

type CreateRouteRequest struct {
	PathParams  CreateRoutePathParams
	QueryParams CreateRouteQueryParams
	Headers     CreateRouteHeaders
	Request     CreateRouteRequestBody `request:"mediaType=application/json"`
}

type CreateRouteResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	CreateRouteOutput            *shared.CreateRouteOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	LimitExceededException       *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
