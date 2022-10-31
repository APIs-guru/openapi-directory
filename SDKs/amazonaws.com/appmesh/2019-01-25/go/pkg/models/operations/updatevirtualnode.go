package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVirtualNodePathParams struct {
	MeshName        string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualNodeName string `pathParam:"style=simple,explode=false,name=virtualNodeName"`
}

type UpdateVirtualNodeQueryParams struct {
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
}

type UpdateVirtualNodeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateVirtualNodeRequestBodySpec struct {
	BackendDefaults  *shared.BackendDefaults  `json:"backendDefaults,omitempty"`
	Backends         []shared.Backend         `json:"backends,omitempty"`
	Listeners        []shared.Listener        `json:"listeners,omitempty"`
	Logging          *shared.Logging          `json:"logging,omitempty"`
	ServiceDiscovery *shared.ServiceDiscovery `json:"serviceDiscovery,omitempty"`
}

type UpdateVirtualNodeRequestBody struct {
	ClientToken *string                          `json:"clientToken,omitempty"`
	Spec        UpdateVirtualNodeRequestBodySpec `json:"spec"`
}

type UpdateVirtualNodeRequest struct {
	PathParams  UpdateVirtualNodePathParams
	QueryParams UpdateVirtualNodeQueryParams
	Headers     UpdateVirtualNodeHeaders
	Request     UpdateVirtualNodeRequestBody `request:"mediaType=application/json"`
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
