package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProfilePathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
}

type DeleteProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteProfileRequestBody struct {
	ProfileID string `json:"ProfileId"`
}

type DeleteProfileRequest struct {
	PathParams DeleteProfilePathParams
	Headers    DeleteProfileHeaders
	Request    DeleteProfileRequestBody `request:"mediaType=application/json"`
}

type DeleteProfileResponse struct {
	AccessDeniedException     *interface{}
	BadRequestException       *interface{}
	ContentType               string
	DeleteProfileResponse     *shared.DeleteProfileResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
