package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentationPartsPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type GetDocumentationPartsLocationStatusEnum string

const (
	GetDocumentationPartsLocationStatusEnumDocumented   GetDocumentationPartsLocationStatusEnum = "DOCUMENTED"
	GetDocumentationPartsLocationStatusEnumUndocumented GetDocumentationPartsLocationStatusEnum = "UNDOCUMENTED"
)

type GetDocumentationPartsTypeEnum string

const (
	GetDocumentationPartsTypeEnumAPI            GetDocumentationPartsTypeEnum = "API"
	GetDocumentationPartsTypeEnumAuthorizer     GetDocumentationPartsTypeEnum = "AUTHORIZER"
	GetDocumentationPartsTypeEnumModel          GetDocumentationPartsTypeEnum = "MODEL"
	GetDocumentationPartsTypeEnumResource       GetDocumentationPartsTypeEnum = "RESOURCE"
	GetDocumentationPartsTypeEnumMethod         GetDocumentationPartsTypeEnum = "METHOD"
	GetDocumentationPartsTypeEnumPathParameter  GetDocumentationPartsTypeEnum = "PATH_PARAMETER"
	GetDocumentationPartsTypeEnumQueryParameter GetDocumentationPartsTypeEnum = "QUERY_PARAMETER"
	GetDocumentationPartsTypeEnumRequestHeader  GetDocumentationPartsTypeEnum = "REQUEST_HEADER"
	GetDocumentationPartsTypeEnumRequestBody    GetDocumentationPartsTypeEnum = "REQUEST_BODY"
	GetDocumentationPartsTypeEnumResponse       GetDocumentationPartsTypeEnum = "RESPONSE"
	GetDocumentationPartsTypeEnumResponseHeader GetDocumentationPartsTypeEnum = "RESPONSE_HEADER"
	GetDocumentationPartsTypeEnumResponseBody   GetDocumentationPartsTypeEnum = "RESPONSE_BODY"
)

type GetDocumentationPartsQueryParams struct {
	Limit          *int64                                   `queryParam:"style=form,explode=true,name=limit"`
	LocationStatus *GetDocumentationPartsLocationStatusEnum `queryParam:"style=form,explode=true,name=locationStatus"`
	Name           *string                                  `queryParam:"style=form,explode=true,name=name"`
	Path           *string                                  `queryParam:"style=form,explode=true,name=path"`
	Position       *string                                  `queryParam:"style=form,explode=true,name=position"`
	Type           *GetDocumentationPartsTypeEnum           `queryParam:"style=form,explode=true,name=type"`
}

type GetDocumentationPartsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDocumentationPartsRequest struct {
	PathParams  GetDocumentationPartsPathParams
	QueryParams GetDocumentationPartsQueryParams
	Headers     GetDocumentationPartsHeaders
}

type GetDocumentationPartsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	DocumentationParts       *shared.DocumentationParts
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
