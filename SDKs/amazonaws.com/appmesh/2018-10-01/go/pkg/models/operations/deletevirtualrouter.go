package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVirtualRouterPathParams struct {
	MeshName          string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualRouterName string `pathParam:"style=simple,explode=false,name=virtualRouterName"`
}

type DeleteVirtualRouterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteVirtualRouterRequest struct {
	PathParams DeleteVirtualRouterPathParams
	Headers    DeleteVirtualRouterHeaders
}

type DeleteVirtualRouterResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DeleteVirtualRouterOutput    *shared.DeleteVirtualRouterOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ResourceInUseException       *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
