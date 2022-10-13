package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVirtualNodePathParams struct {
	MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
}

type CreateVirtualNodeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateVirtualNodeRequestBodySpec struct {
	Backends         []string                 `json:"backends"`
	Listeners        []shared.Listener        `json:"listeners"`
	ServiceDiscovery *shared.ServiceDiscovery `json:"serviceDiscovery"`
}

type CreateVirtualNodeRequestBody struct {
	ClientToken     *string                          `json:"clientToken"`
	Spec            CreateVirtualNodeRequestBodySpec `json:"spec"`
	VirtualNodeName string                           `json:"virtualNodeName"`
}

type CreateVirtualNodeRequest struct {
	PathParams CreateVirtualNodePathParams
	Headers    CreateVirtualNodeHeaders
	Request    CreateVirtualNodeRequestBody `request:"mediaType=application/json"`
}

type CreateVirtualNodeResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	CreateVirtualNodeOutput      *shared.CreateVirtualNodeOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	LimitExceededException       *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
