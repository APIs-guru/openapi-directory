package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsagePlanKeyPathParams struct {
	KeyID       string `pathParam:"style=simple,explode=false,name=keyId"`
	UsageplanID string `pathParam:"style=simple,explode=false,name=usageplanId"`
}

type GetUsagePlanKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUsagePlanKeyRequest struct {
	PathParams GetUsagePlanKeyPathParams
	Headers    GetUsagePlanKeyHeaders
}

type GetUsagePlanKeyResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
	UsagePlanKey             *shared.UsagePlanKey
}
