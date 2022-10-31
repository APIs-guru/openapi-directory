package operations

import (
	"openapi/pkg/models/shared"
)

type GetDataSourcePathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
	Name  string `pathParam:"style=simple,explode=false,name=name"`
}

type GetDataSourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
