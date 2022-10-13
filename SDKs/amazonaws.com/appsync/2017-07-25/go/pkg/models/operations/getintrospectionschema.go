package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntrospectionSchemaPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type GetIntrospectionSchemaFormatEnum string

const (
	GetIntrospectionSchemaFormatEnumSdl  GetIntrospectionSchemaFormatEnum = "SDL"
	GetIntrospectionSchemaFormatEnumJSON GetIntrospectionSchemaFormatEnum = "JSON"
)

type GetIntrospectionSchemaQueryParams struct {
	Format            GetIntrospectionSchemaFormatEnum `queryParam:"style=form,explode=true,name=format"`
	IncludeDirectives *bool                            `queryParam:"style=form,explode=true,name=includeDirectives"`
}

type GetIntrospectionSchemaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetIntrospectionSchemaRequest struct {
	PathParams  GetIntrospectionSchemaPathParams
	QueryParams GetIntrospectionSchemaQueryParams
	Headers     GetIntrospectionSchemaHeaders
}

type GetIntrospectionSchemaResponse struct {
	ContentType                    string
	GetIntrospectionSchemaResponse *shared.GetIntrospectionSchemaResponse
	GraphQlSchemaException         *interface{}
	InternalFailureException       *interface{}
	NotFoundException              *interface{}
	StatusCode                     int64
	UnauthorizedException          *interface{}
}
