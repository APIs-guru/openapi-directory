package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsagePathParams struct {
	UsageplanID string `pathParam:"style=simple,explode=false,name=usageplanId"`
}

type GetUsageQueryParams struct {
	EndDate   string  `queryParam:"style=form,explode=true,name=endDate"`
	KeyID     *string `queryParam:"style=form,explode=true,name=keyId"`
	Limit     *int64  `queryParam:"style=form,explode=true,name=limit"`
	Position  *string `queryParam:"style=form,explode=true,name=position"`
	StartDate string  `queryParam:"style=form,explode=true,name=startDate"`
}

type GetUsageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUsageRequest struct {
	PathParams  GetUsagePathParams
	QueryParams GetUsageQueryParams
	Headers     GetUsageHeaders
}

type GetUsageResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
	Usage                    *shared.Usage
}
