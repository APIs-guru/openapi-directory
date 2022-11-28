package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVirtualGatewayPathParams struct {
	MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
}

type CreateVirtualGatewayQueryParams struct {
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
}

type CreateVirtualGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateVirtualGatewayRequestBodySpec
// An object that represents the specification of a service mesh resource.
type CreateVirtualGatewayRequestBodySpec struct {
	BackendDefaults *shared.VirtualGatewayBackendDefaults `json:"backendDefaults,omitempty"`
	Listeners       []shared.VirtualGatewayListener       `json:"listeners,omitempty"`
	Logging         *shared.VirtualGatewayLogging         `json:"logging,omitempty"`
}

type CreateVirtualGatewayRequestBody struct {
	ClientToken        *string                             `json:"clientToken,omitempty"`
	Spec               CreateVirtualGatewayRequestBodySpec `json:"spec"`
	Tags               []shared.TagRef                     `json:"tags,omitempty"`
	VirtualGatewayName string                              `json:"virtualGatewayName"`
}

type CreateVirtualGatewayRequest struct {
	PathParams  CreateVirtualGatewayPathParams
	QueryParams CreateVirtualGatewayQueryParams
	Headers     CreateVirtualGatewayHeaders
	Request     CreateVirtualGatewayRequestBody `request:"mediaType=application/json"`
}

type CreateVirtualGatewayResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	CreateVirtualGatewayOutput   *shared.CreateVirtualGatewayOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	LimitExceededException       *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
