package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVirtualServicePathParams struct {
	MeshName           string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualServiceName string `pathParam:"style=simple,explode=false,name=virtualServiceName"`
}

type UpdateVirtualServiceQueryParams struct {
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
}

type UpdateVirtualServiceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateVirtualServiceRequestBodySpec struct {
	Provider *shared.VirtualServiceProvider `json:"provider"`
}

type UpdateVirtualServiceRequestBody struct {
	ClientToken *string                             `json:"clientToken"`
	Spec        UpdateVirtualServiceRequestBodySpec `json:"spec"`
}

type UpdateVirtualServiceRequest struct {
	PathParams  UpdateVirtualServicePathParams
	QueryParams UpdateVirtualServiceQueryParams
	Headers     UpdateVirtualServiceHeaders
	Request     UpdateVirtualServiceRequestBody `request:"mediaType=application/json"`
}

type UpdateVirtualServiceResponse struct {
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
	UpdateVirtualServiceOutput   *shared.UpdateVirtualServiceOutput
}
