package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileObjectTypeTemplatePathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=TemplateId"`
}

type GetProfileObjectTypeTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetProfileObjectTypeTemplateRequest struct {
	PathParams GetProfileObjectTypeTemplatePathParams
	Headers    GetProfileObjectTypeTemplateHeaders
}

type GetProfileObjectTypeTemplateResponse struct {
	AccessDeniedException                *interface{}
	BadRequestException                  *interface{}
	ContentType                          string
	GetProfileObjectTypeTemplateResponse *shared.GetProfileObjectTypeTemplateResponse
	InternalServerException              *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
}
