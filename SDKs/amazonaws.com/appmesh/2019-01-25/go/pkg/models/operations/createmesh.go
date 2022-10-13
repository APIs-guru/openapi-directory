package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMeshHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateMeshRequestBodySpec struct {
	EgressFilter *shared.EgressFilter `json:"egressFilter"`
}

type CreateMeshRequestBody struct {
	ClientToken *string                    `json:"clientToken"`
	MeshName    string                     `json:"meshName"`
	Spec        *CreateMeshRequestBodySpec `json:"spec"`
	Tags        []shared.TagRef            `json:"tags"`
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
