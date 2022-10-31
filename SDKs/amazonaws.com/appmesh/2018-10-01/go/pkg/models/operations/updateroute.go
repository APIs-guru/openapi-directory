package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRoutePathParams struct {
	MeshName          string `pathParam:"style=simple,explode=false,name=meshName"`
	RouteName         string `pathParam:"style=simple,explode=false,name=routeName"`
	VirtualRouterName string `pathParam:"style=simple,explode=false,name=virtualRouterName"`
}

type UpdateRouteHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateRouteRequestBodySpec struct {
	HTTPRoute *shared.HTTPRoute `json:"httpRoute,omitempty"`
}

type UpdateRouteRequestBody struct {
	ClientToken *string                    `json:"clientToken,omitempty"`
	Spec        UpdateRouteRequestBodySpec `json:"spec"`
}

type UpdateRouteRequest struct {
	PathParams UpdateRoutePathParams
	Headers    UpdateRouteHeaders
	Request    UpdateRouteRequestBody `request:"mediaType=application/json"`
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
