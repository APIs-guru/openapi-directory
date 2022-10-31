package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAppPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type DeleteAppHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteAppRequest struct {
	PathParams DeleteAppPathParams
	Headers    DeleteAppHeaders
}

type DeleteAppResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	DeleteAppResult                  *shared.DeleteAppResult
	DependentServiceFailureException *interface{}
	InternalFailureException         *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
	UnauthorizedException            *interface{}
}
