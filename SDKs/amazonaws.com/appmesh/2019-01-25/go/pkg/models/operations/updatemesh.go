package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMeshPathParams struct {
	MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
}

type UpdateMeshHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

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
