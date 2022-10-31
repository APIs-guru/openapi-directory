package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileObjectTypeTemplatePathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=TemplateId"`
}

type GetProfileObjectTypeTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
