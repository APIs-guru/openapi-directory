package operations

import (
	"openapi/pkg/models/shared"
)

type CreateJobTemplatePathParams struct {
	JobTemplateID string `pathParam:"style=simple,explode=false,name=jobTemplateId"`
}

type CreateJobTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateJobTemplateRequestBodyAbortConfig
// The criteria that determine when and how a job abort takes place.
type CreateJobTemplateRequestBodyAbortConfig struct {
	CriteriaList []shared.AbortCriteria `json:"criteriaList,omitempty"`
}

// CreateJobTemplateRequestBodyJobExecutionsRolloutConfig
// Allows you to create a staged rollout of a job.
type CreateJobTemplateRequestBodyJobExecutionsRolloutConfig struct {
	ExponentialRate  *shared.ExponentialRolloutRate `json:"exponentialRate,omitempty"`
	MaximumPerMinute *int64                         `json:"maximumPerMinute,omitempty"`
}

// CreateJobTemplateRequestBodyPresignedURLConfig
// Configuration for pre-signed S3 URLs.
type CreateJobTemplateRequestBodyPresignedURLConfig struct {
	ExpiresInSec *int64  `json:"expiresInSec,omitempty"`
	RoleArn      *string `json:"roleArn,omitempty"`
}

// CreateJobTemplateRequestBodyTimeoutConfig
// Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
type CreateJobTemplateRequestBodyTimeoutConfig struct {
	InProgressTimeoutInMinutes *int64 `json:"inProgressTimeoutInMinutes,omitempty"`
}

type CreateJobTemplateRequestBody struct {
	AbortConfig                *CreateJobTemplateRequestBodyAbortConfig                `json:"abortConfig,omitempty"`
	Description                string                                                  `json:"description"`
	Document                   *string                                                 `json:"document,omitempty"`
	DocumentSource             *string                                                 `json:"documentSource,omitempty"`
	JobArn                     *string                                                 `json:"jobArn,omitempty"`
	JobExecutionsRolloutConfig *CreateJobTemplateRequestBodyJobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig,omitempty"`
	PresignedURLConfig         *CreateJobTemplateRequestBodyPresignedURLConfig         `json:"presignedUrlConfig,omitempty"`
	Tags                       []shared.Tag                                            `json:"tags,omitempty"`
	TimeoutConfig              *CreateJobTemplateRequestBodyTimeoutConfig              `json:"timeoutConfig,omitempty"`
}

type CreateJobTemplateRequest struct {
	PathParams CreateJobTemplatePathParams
	Headers    CreateJobTemplateHeaders
	Request    CreateJobTemplateRequestBody `request:"mediaType=application/json"`
}

type CreateJobTemplateResponse struct {
	ConflictException         *interface{}
	ContentType               string
	CreateJobTemplateResponse *shared.CreateJobTemplateResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
