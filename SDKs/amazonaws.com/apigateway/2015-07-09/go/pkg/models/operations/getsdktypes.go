package operations

import (
	"openapi/pkg/models/shared"
)

type GetSdkTypesQueryParams struct {
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Position *string `queryParam:"style=form,explode=true,name=position"`
}

type GetSdkTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSdkTypesRequest struct {
	QueryParams GetSdkTypesQueryParams
	Headers     GetSdkTypesHeaders
}

type GetSdkTypesResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	NotFoundException        *interface{}
	SdkTypes                 *shared.SdkTypes
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
