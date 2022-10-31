package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type GetAppHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAppRequest struct {
	PathParams GetAppPathParams
	Headers    GetAppHeaders
}

type GetAppResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetAppResult             *shared.GetAppResult
	InternalFailureException *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
