package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileObjectTypePathParams struct {
	DomainName     string `pathParam:"style=simple,explode=false,name=DomainName"`
	ObjectTypeName string `pathParam:"style=simple,explode=false,name=ObjectTypeName"`
}

type GetProfileObjectTypeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetProfileObjectTypeRequest struct {
	PathParams GetProfileObjectTypePathParams
	Headers    GetProfileObjectTypeHeaders
}

type GetProfileObjectTypeResponse struct {
	AccessDeniedException        *interface{}
	BadRequestException          *interface{}
	ContentType                  string
	GetProfileObjectTypeResponse *shared.GetProfileObjectTypeResponse
	InternalServerException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
