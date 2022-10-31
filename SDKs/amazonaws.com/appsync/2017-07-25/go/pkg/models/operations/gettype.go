package operations

import (
	"openapi/pkg/models/shared"
)

type GetTypePathParams struct {
	APIID    string `pathParam:"style=simple,explode=false,name=apiId"`
	TypeName string `pathParam:"style=simple,explode=false,name=typeName"`
}

type GetTypeFormatEnum string

const (
	GetTypeFormatEnumSdl  GetTypeFormatEnum = "SDL"
	GetTypeFormatEnumJSON GetTypeFormatEnum = "JSON"
)

type GetTypeQueryParams struct {
	Format GetTypeFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type GetTypeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetTypeRequest struct {
	PathParams  GetTypePathParams
	QueryParams GetTypeQueryParams
	Headers     GetTypeHeaders
}

type GetTypeResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	GetTypeResponse                 *shared.GetTypeResponse
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
