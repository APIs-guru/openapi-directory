package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsagePlanKeyPathParams struct {
	KeyID       string `pathParam:"style=simple,explode=false,name=keyId"`
	UsageplanID string `pathParam:"style=simple,explode=false,name=usageplanId"`
}

type GetUsagePlanKeyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
