package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVirtualNodePathParams struct {
	MeshName        string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualNodeName string `pathParam:"style=simple,explode=false,name=virtualNodeName"`
}

type UpdateVirtualNodeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateVirtualNodeRequestBodySpec struct {
	Backends         []string                 `json:"backends"`
	Listeners        []shared.Listener        `json:"listeners"`
	ServiceDiscovery *shared.ServiceDiscovery `json:"serviceDiscovery"`
}

type UpdateVirtualNodeRequestBody struct {
	ClientToken *string                          `json:"clientToken"`
	Spec        UpdateVirtualNodeRequestBodySpec `json:"spec"`
}

type UpdateVirtualNodeRequest struct {
	PathParams UpdateVirtualNodePathParams
	Headers    UpdateVirtualNodeHeaders
	Request    UpdateVirtualNodeRequestBody `request:"mediaType=application/json"`
}

type UpdateVirtualNodeResponse struct {
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
	UpdateVirtualNodeOutput      *shared.UpdateVirtualNodeOutput
}
