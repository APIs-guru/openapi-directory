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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateVirtualGatewayRequestBodySpec struct {
	BackendDefaults *shared.VirtualGatewayBackendDefaults `json:"backendDefaults"`
	Listeners       []shared.VirtualGatewayListener       `json:"listeners"`
	Logging         *shared.VirtualGatewayLogging         `json:"logging"`
}

type CreateVirtualGatewayRequestBody struct {
	ClientToken        *string                             `json:"clientToken"`
	Spec               CreateVirtualGatewayRequestBodySpec `json:"spec"`
	Tags               []shared.TagRef                     `json:"tags"`
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
