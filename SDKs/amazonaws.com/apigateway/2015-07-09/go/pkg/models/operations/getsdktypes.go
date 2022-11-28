package operations

import (
	"openapi/pkg/models/shared"
)

type GetSDKTypesQueryParams struct {
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Position *string `queryParam:"style=form,explode=true,name=position"`
}

type GetSDKTypesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetSDKTypesRequest struct {
	QueryParams GetSDKTypesQueryParams
	Headers     GetSDKTypesHeaders
}

type GetSDKTypesResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	NotFoundException        *interface{}
	SdkTypes                 *shared.SDKTypes
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
