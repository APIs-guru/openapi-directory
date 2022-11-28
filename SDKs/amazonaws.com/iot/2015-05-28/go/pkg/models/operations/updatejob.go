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

// UpdateJobRequestBodyAbortConfig
// The criteria that determine when and how a job abort takes place.
type UpdateJobRequestBodyAbortConfig struct {
	CriteriaList []shared.AbortCriteria `json:"criteriaList,omitempty"`
}

// UpdateJobRequestBodyJobExecutionsRolloutConfig
// Allows you to create a staged rollout of a job.
type UpdateJobRequestBodyJobExecutionsRolloutConfig struct {
	ExponentialRate  *shared.ExponentialRolloutRate `json:"exponentialRate,omitempty"`
	MaximumPerMinute *int64                         `json:"maximumPerMinute,omitempty"`
}

// UpdateJobRequestBodyPresignedURLConfig
// Configuration for pre-signed S3 URLs.
type UpdateJobRequestBodyPresignedURLConfig struct {
	ExpiresInSec *int64  `json:"expiresInSec,omitempty"`
	RoleArn      *string `json:"roleArn,omitempty"`
}

// UpdateJobRequestBodyTimeoutConfig
// Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
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
