package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUsagePlanHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateUsagePlanRequestBodyQuota struct {
	Limit  *int64                      `json:"limit"`
	Offset *int64                      `json:"offset"`
	Period *shared.QuotaPeriodTypeEnum `json:"period"`
}

type CreateUsagePlanRequestBodyThrottle struct {
	BurstLimit *int64   `json:"burstLimit"`
	RateLimit  *float64 `json:"rateLimit"`
}

type CreateUsagePlanRequestBody struct {
	APIStages   []shared.APIStage                   `json:"apiStages"`
	Description *string                             `json:"description"`
	Name        string                              `json:"name"`
	Quota       *CreateUsagePlanRequestBodyQuota    `json:"quota"`
	Tags        map[string]string                   `json:"tags"`
	Throttle    *CreateUsagePlanRequestBodyThrottle `json:"throttle"`
}

type CreateUsagePlanRequest struct {
	Headers CreateUsagePlanHeaders
	Request CreateUsagePlanRequestBody `request:"mediaType=application/json"`
}

type CreateUsagePlanResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
	UsagePlan                *shared.UsagePlan
}
