package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAPIKeyPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateAPIKeyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateAPIKeyRequestBody struct {
	Description *string `json:"description,omitempty"`
	Expires     *int64  `json:"expires,omitempty"`
}

type CreateAPIKeyRequest struct {
	PathParams CreateAPIKeyPathParams
	Headers    CreateAPIKeyHeaders
	Request    CreateAPIKeyRequestBody `request:"mediaType=application/json"`
}

type CreateAPIKeyResponse struct {
	APIKeyLimitExceededException       *interface{}
	APIKeyValidityOutOfBoundsException *interface{}
	BadRequestException                *interface{}
	ContentType                        string
	CreateAPIKeyResponse               *shared.CreateAPIKeyResponse
	InternalFailureException           *interface{}
	LimitExceededException             *interface{}
	NotFoundException                  *interface{}
	StatusCode                         int64
	UnauthorizedException              *interface{}
}
