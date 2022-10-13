package operations

import (
	"openapi/pkg/models/shared"
)

type GetComponentVersionArtifactPathParams struct {
	Arn          string `pathParam:"style=simple,explode=false,name=arn"`
	ArtifactName string `pathParam:"style=simple,explode=false,name=artifactName"`
}

type GetComponentVersionArtifactHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetComponentVersionArtifactRequest struct {
	PathParams GetComponentVersionArtifactPathParams
	Headers    GetComponentVersionArtifactHeaders
}

type GetComponentVersionArtifactResponse struct {
	AccessDeniedException               *interface{}
	ContentType                         string
	GetComponentVersionArtifactResponse *shared.GetComponentVersionArtifactResponse
	InternalServerException             *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	ThrottlingException                 *interface{}
	ValidationException                 *interface{}
}
