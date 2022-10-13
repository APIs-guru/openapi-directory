package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterThingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RegisterThingRequestBody struct {
	Parameters   map[string]string `json:"parameters"`
	TemplateBody string            `json:"templateBody"`
}

type RegisterThingRequest struct {
	Headers RegisterThingHeaders
	Request RegisterThingRequestBody `request:"mediaType=application/json"`
}

type RegisterThingResponse struct {
	ConflictingResourceUpdateException   *interface{}
	ContentType                          string
	InternalFailureException             *interface{}
	InvalidRequestException              *interface{}
	RegisterThingResponse                *shared.RegisterThingResponse
	ResourceRegistrationFailureException *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
	UnauthorizedException                *interface{}
}
