package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRoutePathParams struct {
	MeshName          string `pathParam:"style=simple,explode=false,name=meshName"`
	RouteName         string `pathParam:"style=simple,explode=false,name=routeName"`
	VirtualRouterName string `pathParam:"style=simple,explode=false,name=virtualRouterName"`
}

type UpdateRouteQueryParams struct {
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
}

type UpdateRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateRouteRequestBodySpec struct {
	GrpcRoute  *shared.GrpcRoute `json:"grpcRoute"`
	Http2Route *shared.HTTPRoute `json:"http2Route"`
	HTTPRoute  *shared.HTTPRoute `json:"httpRoute"`
	Priority   *int64            `json:"priority"`
	TCPRoute   *shared.TCPRoute  `json:"tcpRoute"`
}

type UpdateRouteRequestBody struct {
	ClientToken *string                    `json:"clientToken"`
	Spec        UpdateRouteRequestBodySpec `json:"spec"`
}

type UpdateRouteRequest struct {
	PathParams  UpdateRoutePathParams
	QueryParams UpdateRouteQueryParams
	Headers     UpdateRouteHeaders
	Request     UpdateRouteRequestBody `request:"mediaType=application/json"`
}

type UpdateRouteResponse struct {
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
	UpdateRouteOutput            *shared.UpdateRouteOutput
}
