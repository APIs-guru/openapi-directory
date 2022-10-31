package operations

import (
	"openapi/pkg/models/shared"
)

type GetSdkPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
	SdkType   string `pathParam:"style=simple,explode=false,name=sdk_type"`
	StageName string `pathParam:"style=simple,explode=false,name=stage_name"`
}

type GetSdkQueryParams struct {
	Parameters map[string]string `queryParam:"style=form,explode=true,name=parameters"`
}

type GetSdkHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetSdkRequest struct {
	PathParams  GetSdkPathParams
	QueryParams GetSdkQueryParams
	Headers     GetSdkHeaders
}

type GetSdkResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	SdkResponse              *shared.SdkResponse
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
