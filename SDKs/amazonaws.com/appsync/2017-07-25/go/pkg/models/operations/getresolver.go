package operations

import (
	"openapi/pkg/models/shared"
)

type GetResolverPathParams struct {
	APIID     string `pathParam:"style=simple,explode=false,name=apiId"`
	FieldName string `pathParam:"style=simple,explode=false,name=fieldName"`
	TypeName  string `pathParam:"style=simple,explode=false,name=typeName"`
}

type GetResolverHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetResolverRequest struct {
	PathParams GetResolverPathParams
	Headers    GetResolverHeaders
}

type GetResolverResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	GetResolverResponse             *shared.GetResolverResponse
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
