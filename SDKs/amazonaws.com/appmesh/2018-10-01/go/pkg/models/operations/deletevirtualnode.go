package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVirtualNodePathParams struct {
	MeshName        string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualNodeName string `pathParam:"style=simple,explode=false,name=virtualNodeName"`
}

type DeleteVirtualNodeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteVirtualNodeRequest struct {
	PathParams DeleteVirtualNodePathParams
	Headers    DeleteVirtualNodeHeaders
}

type DeleteVirtualNodeResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DeleteVirtualNodeOutput      *shared.DeleteVirtualNodeOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ResourceInUseException       *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
