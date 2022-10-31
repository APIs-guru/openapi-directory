package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTypePathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateTypeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateTypeRequestBodyFormatEnum string

const (
	CreateTypeRequestBodyFormatEnumSdl  CreateTypeRequestBodyFormatEnum = "SDL"
	CreateTypeRequestBodyFormatEnumJSON CreateTypeRequestBodyFormatEnum = "JSON"
)

type CreateTypeRequestBody struct {
	Definition string                          `json:"definition"`
	Format     CreateTypeRequestBodyFormatEnum `json:"format"`
}

type CreateTypeRequest struct {
	PathParams CreateTypePathParams
	Headers    CreateTypeHeaders
	Request    CreateTypeRequestBody `request:"mediaType=application/json"`
}

type CreateTypeResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateTypeResponse              *shared.CreateTypeResponse
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
