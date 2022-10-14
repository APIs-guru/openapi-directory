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
	GrpcRoute  *shared.GrpcRoute `json:"grpcRoute,omitempty"`
	Http2Route *shared.HTTPRoute `json:"http2Route,omitempty"`
	HTTPRoute  *shared.HTTPRoute `json:"httpRoute,omitempty"`
	Priority   *int64            `json:"priority,omitempty"`
	TCPRoute   *shared.TCPRoute  `json:"tcpRoute,omitempty"`
}

type UpdateRouteRequestBody struct {
	ClientToken *string                    `json:"clientToken,omitempty"`
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
