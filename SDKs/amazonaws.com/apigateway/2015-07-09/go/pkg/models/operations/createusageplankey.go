package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUsagePlanKeyPathParams struct {
	UsageplanID string `pathParam:"style=simple,explode=false,name=usageplanId"`
}

type CreateUsagePlanKeyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateUsagePlanKeyRequestBody struct {
	KeyID   string `json:"keyId"`
	KeyType string `json:"keyType"`
}

type CreateUsagePlanKeyRequest struct {
	PathParams CreateUsagePlanKeyPathParams
	Headers    CreateUsagePlanKeyHeaders
	Request    CreateUsagePlanKeyRequestBody `request:"mediaType=application/json"`
}

type CreateUsagePlanKeyResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
	UsagePlanKey             *shared.UsagePlanKey
}
