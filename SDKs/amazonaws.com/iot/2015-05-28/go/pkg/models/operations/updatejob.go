package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type UpdateJobQueryParams struct {
	NamespaceID *string `queryParam:"style=form,explode=true,name=namespaceId"`
}

type UpdateJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateJobRequestBodyAbortConfig struct {
	CriteriaList []shared.AbortCriteria `json:"criteriaList,omitempty"`
}

type UpdateJobRequestBodyJobExecutionsRolloutConfig struct {
	ExponentialRate  *shared.ExponentialRolloutRate `json:"exponentialRate,omitempty"`
	MaximumPerMinute *int64                         `json:"maximumPerMinute,omitempty"`
}

type UpdateJobRequestBodyPresignedURLConfig struct {
	ExpiresInSec *int64  `json:"expiresInSec,omitempty"`
	RoleArn      *string `json:"roleArn,omitempty"`
}

type UpdateJobRequestBodyTimeoutConfig struct {
	InProgressTimeoutInMinutes *int64 `json:"inProgressTimeoutInMinutes,omitempty"`
}

type UpdateJobRequestBody struct {
	AbortConfig                *UpdateJobRequestBodyAbortConfig                `json:"abortConfig,omitempty"`
	Description                *string                                         `json:"description,omitempty"`
	JobExecutionsRolloutConfig *UpdateJobRequestBodyJobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig,omitempty"`
	PresignedURLConfig         *UpdateJobRequestBodyPresignedURLConfig         `json:"presignedUrlConfig,omitempty"`
	TimeoutConfig              *UpdateJobRequestBodyTimeoutConfig              `json:"timeoutConfig,omitempty"`
}

type UpdateJobRequest struct {
	PathParams  UpdateJobPathParams
	QueryParams UpdateJobQueryParams
	Headers     UpdateJobHeaders
	Request     UpdateJobRequestBody `request:"mediaType=application/json"`
}

type UpdateJobResponse struct {
	ContentType                 string
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
