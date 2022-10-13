package operations

import (
	"openapi/pkg/models/shared"
)

type GetDataSourcePathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
	Name  string `pathParam:"style=simple,explode=false,name=name"`
}

type GetDataSourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDataSourceRequest struct {
	PathParams GetDataSourcePathParams
	Headers    GetDataSourceHeaders
}

type GetDataSourceResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	GetDataSourceResponse           *shared.GetDataSourceResponse
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
