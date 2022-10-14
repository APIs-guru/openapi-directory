package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVirtualGatewayPathParams struct {
	MeshName           string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualGatewayName string `pathParam:"style=simple,explode=false,name=virtualGatewayName"`
}

type UpdateVirtualGatewayQueryParams struct {
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
}

type UpdateVirtualGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateVirtualGatewayRequestBodySpec struct {
	BackendDefaults *shared.VirtualGatewayBackendDefaults `json:"backendDefaults,omitempty"`
	Listeners       []shared.VirtualGatewayListener       `json:"listeners,omitempty"`
	Logging         *shared.VirtualGatewayLogging         `json:"logging,omitempty"`
}

type UpdateVirtualGatewayRequestBody struct {
	ClientToken *string                             `json:"clientToken,omitempty"`
	Spec        UpdateVirtualGatewayRequestBodySpec `json:"spec"`
}

type UpdateVirtualGatewayRequest struct {
	PathParams  UpdateVirtualGatewayPathParams
	QueryParams UpdateVirtualGatewayQueryParams
	Headers     UpdateVirtualGatewayHeaders
	Request     UpdateVirtualGatewayRequestBody `request:"mediaType=application/json"`
}

type UpdateVirtualGatewayResponse struct {
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
	UpdateVirtualGatewayOutput   *shared.UpdateVirtualGatewayOutput
}
