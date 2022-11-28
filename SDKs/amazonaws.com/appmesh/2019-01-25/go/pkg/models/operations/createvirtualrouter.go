package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVirtualRouterPathParams struct {
	MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
}

type CreateVirtualRouterQueryParams struct {
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
}

type CreateVirtualRouterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateVirtualRouterRequestBodySpec
// An object that represents the specification of a virtual router.
type CreateVirtualRouterRequestBodySpec struct {
	Listeners []shared.VirtualRouterListener `json:"listeners,omitempty"`
}

type CreateVirtualRouterRequestBody struct {
	ClientToken       *string                            `json:"clientToken,omitempty"`
	Spec              CreateVirtualRouterRequestBodySpec `json:"spec"`
	Tags              []shared.TagRef                    `json:"tags,omitempty"`
	VirtualRouterName string                             `json:"virtualRouterName"`
}

type CreateVirtualRouterRequest struct {
	PathParams  CreateVirtualRouterPathParams
	QueryParams CreateVirtualRouterQueryParams
	Headers     CreateVirtualRouterHeaders
	Request     CreateVirtualRouterRequestBody `request:"mediaType=application/json"`
}

type CreateVirtualRouterResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	CreateVirtualRouterOutput    *shared.CreateVirtualRouterOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	LimitExceededException       *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
