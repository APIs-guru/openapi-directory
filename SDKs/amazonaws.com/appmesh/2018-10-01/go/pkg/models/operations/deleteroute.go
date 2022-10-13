package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRoutePathParams struct {
	MeshName          string `pathParam:"style=simple,explode=false,name=meshName"`
	RouteName         string `pathParam:"style=simple,explode=false,name=routeName"`
	VirtualRouterName string `pathParam:"style=simple,explode=false,name=virtualRouterName"`
}

type DeleteRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteRouteRequest struct {
	PathParams DeleteRoutePathParams
	Headers    DeleteRouteHeaders
}

type DeleteRouteResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DeleteRouteOutput            *shared.DeleteRouteOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ResourceInUseException       *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
