package operations

import (
	"openapi/pkg/models/shared"
)

type ResolveComponentCandidatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ResolveComponentCandidatesRequestBodyPlatform struct {
	Attributes map[string]string `json:"attributes,omitempty"`
	Name       *string           `json:"name,omitempty"`
}

type ResolveComponentCandidatesRequestBody struct {
	ComponentCandidates []shared.ComponentCandidate                   `json:"componentCandidates"`
	Platform            ResolveComponentCandidatesRequestBodyPlatform `json:"platform"`
}

type ResolveComponentCandidatesRequest struct {
	Headers ResolveComponentCandidatesHeaders
	Request ResolveComponentCandidatesRequestBody `request:"mediaType=application/json"`
}

type ResolveComponentCandidatesResponse struct {
	AccessDeniedException              *interface{}
	ConflictException                  *interface{}
	ContentType                        string
	InternalServerException            *interface{}
	ResolveComponentCandidatesResponse *shared.ResolveComponentCandidatesResponse
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	ValidationException                *interface{}
}
