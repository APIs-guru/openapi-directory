package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTypePathParams struct {
	APIID    string `pathParam:"style=simple,explode=false,name=apiId"`
	TypeName string `pathParam:"style=simple,explode=false,name=typeName"`
}

type UpdateTypeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateTypeRequestBodyFormatEnum string

const (
	UpdateTypeRequestBodyFormatEnumSdl  UpdateTypeRequestBodyFormatEnum = "SDL"
	UpdateTypeRequestBodyFormatEnumJSON UpdateTypeRequestBodyFormatEnum = "JSON"
)

type UpdateTypeRequestBody struct {
	Definition *string                         `json:"definition,omitempty"`
	Format     UpdateTypeRequestBodyFormatEnum `json:"format"`
}

type UpdateTypeRequest struct {
	PathParams UpdateTypePathParams
	Headers    UpdateTypeHeaders
	Request    UpdateTypeRequestBody `request:"mediaType=application/json"`
}

type UpdateTypeResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
	UpdateTypeResponse              *shared.UpdateTypeResponse
}
