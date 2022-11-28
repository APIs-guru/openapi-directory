package operations

import (
	"openapi/pkg/models/shared"
)

type CreateJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type CreateJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateJobRequestBodyAbortConfig
// The criteria that determine when and how a job abort takes place.
type CreateJobRequestBodyAbortConfig struct {
	CriteriaList []shared.AbortCriteria `json:"criteriaList,omitempty"`
}

// CreateJobRequestBodyJobExecutionsRolloutConfig
// Allows you to create a staged rollout of a job.
type CreateJobRequestBodyJobExecutionsRolloutConfig struct {
	ExponentialRate  *shared.ExponentialRolloutRate `json:"exponentialRate,omitempty"`
	MaximumPerMinute *int64                         `json:"maximumPerMinute,omitempty"`
}

// CreateJobRequestBodyPresignedURLConfig
// Configuration for pre-signed S3 URLs.
type CreateJobRequestBodyPresignedURLConfig struct {
	ExpiresInSec *int64  `json:"expiresInSec,omitempty"`
	RoleArn      *string `json:"roleArn,omitempty"`
}

type CreateJobRequestBodyTargetSelectionEnum string

const (
	CreateJobRequestBodyTargetSelectionEnumContinuous CreateJobRequestBodyTargetSelectionEnum = "CONTINUOUS"
	CreateJobRequestBodyTargetSelectionEnumSnapshot   CreateJobRequestBodyTargetSelectionEnum = "SNAPSHOT"
)

// CreateJobRequestBodyTimeoutConfig
// Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
type CreateJobRequestBodyTimeoutConfig struct {
	InProgressTimeoutInMinutes *int64 `json:"inProgressTimeoutInMinutes,omitempty"`
}

type CreateJobRequestBody struct {
	AbortConfig                *CreateJobRequestBodyAbortConfig                `json:"abortConfig,omitempty"`
	Description                *string                                         `json:"description,omitempty"`
	Document                   *string                                         `json:"document,omitempty"`
	DocumentSource             *string                                         `json:"documentSource,omitempty"`
	JobExecutionsRolloutConfig *CreateJobRequestBodyJobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig,omitempty"`
	JobTemplateArn             *string                                         `json:"jobTemplateArn,omitempty"`
	NamespaceID                *string                                         `json:"namespaceId,omitempty"`
	PresignedURLConfig         *CreateJobRequestBodyPresignedURLConfig         `json:"presignedUrlConfig,omitempty"`
	Tags                       []shared.Tag                                    `json:"tags,omitempty"`
	TargetSelection            *CreateJobRequestBodyTargetSelectionEnum        `json:"targetSelection,omitempty"`
	Targets                    []string                                        `json:"targets"`
	TimeoutConfig              *CreateJobRequestBodyTimeoutConfig              `json:"timeoutConfig,omitempty"`
}

type CreateJobRequest struct {
	PathParams CreateJobPathParams
	Headers    CreateJobHeaders
	Request    CreateJobRequestBody `request:"mediaType=application/json"`
}

type CreateJobResponse struct {
	ContentType                    string
	CreateJobResponse              *shared.CreateJobResponse
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
