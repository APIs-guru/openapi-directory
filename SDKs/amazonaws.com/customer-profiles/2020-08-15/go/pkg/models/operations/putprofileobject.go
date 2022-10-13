package operations

import (
	"openapi/pkg/models/shared"
)

type PutProfileObjectPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
}

type PutProfileObjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutProfileObjectRequestBody struct {
	Object         string `json:"Object"`
	ObjectTypeName string `json:"ObjectTypeName"`
}

type PutProfileObjectRequest struct {
	PathParams PutProfileObjectPathParams
	Headers    PutProfileObjectHeaders
	Request    PutProfileObjectRequestBody `request:"mediaType=application/json"`
}

type PutProfileObjectResponse struct {
	AccessDeniedException     *interface{}
	BadRequestException       *interface{}
	ContentType               string
	InternalServerException   *interface{}
	PutProfileObjectResponse  *shared.PutProfileObjectResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
