package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMeshPathParams struct {
	MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
}

type UpdateMeshHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateMeshRequestBodySpec
// An object that represents the specification of a service mesh.
type UpdateMeshRequestBodySpec struct {
	EgressFilter *shared.EgressFilter `json:"egressFilter,omitempty"`
}

type UpdateMeshRequestBody struct {
	ClientToken *string                    `json:"clientToken,omitempty"`
	Spec        *UpdateMeshRequestBodySpec `json:"spec,omitempty"`
}

type UpdateMeshRequest struct {
	PathParams UpdateMeshPathParams
	Headers    UpdateMeshHeaders
	Request    UpdateMeshRequestBody `request:"mediaType=application/json"`
}

type UpdateMeshResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateMeshOutput             *shared.UpdateMeshOutput
}
