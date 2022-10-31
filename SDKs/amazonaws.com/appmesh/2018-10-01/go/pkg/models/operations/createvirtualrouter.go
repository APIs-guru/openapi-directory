package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVirtualRouterPathParams struct {
	MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
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

type CreateVirtualRouterRequestBodySpec struct {
	ServiceNames []string `json:"serviceNames,omitempty"`
}

type CreateVirtualRouterRequestBody struct {
	ClientToken       *string                            `json:"clientToken,omitempty"`
	Spec              CreateVirtualRouterRequestBodySpec `json:"spec"`
	VirtualRouterName string                             `json:"virtualRouterName"`
}

type CreateVirtualRouterRequest struct {
	PathParams CreateVirtualRouterPathParams
	Headers    CreateVirtualRouterHeaders
	Request    CreateVirtualRouterRequestBody `request:"mediaType=application/json"`
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
