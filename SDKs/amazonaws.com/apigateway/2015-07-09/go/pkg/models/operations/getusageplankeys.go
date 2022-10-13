package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsagePlanKeysPathParams struct {
	UsageplanID string `pathParam:"style=simple,explode=false,name=usageplanId"`
}

type GetUsagePlanKeysQueryParams struct {
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name     *string `queryParam:"style=form,explode=true,name=name"`
	Position *string `queryParam:"style=form,explode=true,name=position"`
}

type GetUsagePlanKeysHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUsagePlanKeysRequest struct {
	PathParams  GetUsagePlanKeysPathParams
	QueryParams GetUsagePlanKeysQueryParams
	Headers     GetUsagePlanKeysHeaders
}

type GetUsagePlanKeysResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
	UsagePlanKeys            *shared.UsagePlanKeys
}
