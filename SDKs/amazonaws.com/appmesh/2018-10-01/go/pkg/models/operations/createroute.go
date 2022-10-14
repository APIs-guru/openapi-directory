package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRoutePathParams struct {
	MeshName          string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualRouterName string `pathParam:"style=simple,explode=false,name=virtualRouterName"`
}

type CreateRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateRouteRequestBodySpec struct {
	HTTPRoute *shared.HTTPRoute `json:"httpRoute,omitempty"`
}

type CreateRouteRequestBody struct {
	ClientToken *string                    `json:"clientToken,omitempty"`
	RouteName   string                     `json:"routeName"`
	Spec        CreateRouteRequestBodySpec `json:"spec"`
}

type CreateRouteRequest struct {
	PathParams CreateRoutePathParams
	Headers    CreateRouteHeaders
	Request    CreateRouteRequestBody `request:"mediaType=application/json"`
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
