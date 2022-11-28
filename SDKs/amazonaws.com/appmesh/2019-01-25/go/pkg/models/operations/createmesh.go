package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMeshHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateMeshRequestBodySpec
// An object that represents the specification of a service mesh.
type CreateMeshRequestBodySpec struct {
	EgressFilter *shared.EgressFilter `json:"egressFilter,omitempty"`
}

type CreateMeshRequestBody struct {
	ClientToken *string                    `json:"clientToken,omitempty"`
	MeshName    string                     `json:"meshName"`
	Spec        *CreateMeshRequestBodySpec `json:"spec,omitempty"`
	Tags        []shared.TagRef            `json:"tags,omitempty"`
}

type CreateMeshRequest struct {
	Headers CreateMeshHeaders
	Request CreateMeshRequestBody `request:"mediaType=application/json"`
}

type CreateMeshResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	CreateMeshOutput             *shared.CreateMeshOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	LimitExceededException       *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
