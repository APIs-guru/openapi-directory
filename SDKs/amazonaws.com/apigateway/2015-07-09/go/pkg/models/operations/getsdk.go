package operations

import (
	"openapi/pkg/models/shared"
)

type GetSDKPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
	SdkType   string `pathParam:"style=simple,explode=false,name=sdk_type"`
	StageName string `pathParam:"style=simple,explode=false,name=stage_name"`
}

type GetSDKQueryParams struct {
	Parameters map[string]string `queryParam:"style=form,explode=true,name=parameters"`
}

type GetSDKHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetSDKRequest struct {
	PathParams  GetSDKPathParams
	QueryParams GetSDKQueryParams
	Headers     GetSDKHeaders
}

type GetSDKResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	SdkResponse              *shared.SDKResponse
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
