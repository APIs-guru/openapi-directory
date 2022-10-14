package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUsagePathParams struct {
	KeyID       string `pathParam:"style=simple,explode=false,name=keyId"`
	UsageplanID string `pathParam:"style=simple,explode=false,name=usageplanId"`
}

type UpdateUsageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateUsageRequestBody struct {
	PatchOperations []shared.PatchOperation `json:"patchOperations,omitempty"`
}

type UpdateUsageRequest struct {
	PathParams UpdateUsagePathParams
	Headers    UpdateUsageHeaders
	Request    UpdateUsageRequestBody `request:"mediaType=application/json"`
}

type UpdateUsageResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
	Usage                    *shared.Usage
}
