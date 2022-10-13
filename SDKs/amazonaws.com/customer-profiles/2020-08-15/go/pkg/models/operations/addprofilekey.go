package operations

import (
	"openapi/pkg/models/shared"
)

type AddProfileKeyPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
}

type AddProfileKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AddProfileKeyRequestBody struct {
	KeyName   string   `json:"KeyName"`
	ProfileID string   `json:"ProfileId"`
	Values    []string `json:"Values"`
}

type AddProfileKeyRequest struct {
	PathParams AddProfileKeyPathParams
	Headers    AddProfileKeyHeaders
	Request    AddProfileKeyRequestBody `request:"mediaType=application/json"`
}

type AddProfileKeyResponse struct {
	AccessDeniedException     *interface{}
	AddProfileKeyResponse     *shared.AddProfileKeyResponse
	BadRequestException       *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
