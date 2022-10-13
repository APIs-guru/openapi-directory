package operations

import (
	"openapi/pkg/models/shared"
)

type CreateJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type CreateJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateJobRequestBodyAbortConfig struct {
	CriteriaList []shared.AbortCriteria `json:"criteriaList"`
}

type CreateJobRequestBodyJobExecutionsRolloutConfig struct {
	ExponentialRate  *shared.ExponentialRolloutRate `json:"exponentialRate"`
	MaximumPerMinute *int64                         `json:"maximumPerMinute"`
}

type CreateJobRequestBodyPresignedURLConfig struct {
	ExpiresInSec *int64  `json:"expiresInSec"`
	RoleArn      *string `json:"roleArn"`
}

type CreateJobRequestBodyTargetSelectionEnum string

const (
	CreateJobRequestBodyTargetSelectionEnumContinuous CreateJobRequestBodyTargetSelectionEnum = "CONTINUOUS"
	CreateJobRequestBodyTargetSelectionEnumSnapshot   CreateJobRequestBodyTargetSelectionEnum = "SNAPSHOT"
)

type CreateJobRequestBodyTimeoutConfig struct {
	InProgressTimeoutInMinutes *int64 `json:"inProgressTimeoutInMinutes"`
}

type CreateJobRequestBody struct {
	AbortConfig                *CreateJobRequestBodyAbortConfig                `json:"abortConfig"`
	Description                *string                                         `json:"description"`
	Document                   *string                                         `json:"document"`
	DocumentSource             *string                                         `json:"documentSource"`
	JobExecutionsRolloutConfig *CreateJobRequestBodyJobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig"`
	JobTemplateArn             *string                                         `json:"jobTemplateArn"`
	NamespaceID                *string                                         `json:"namespaceId"`
	PresignedURLConfig         *CreateJobRequestBodyPresignedURLConfig         `json:"presignedUrlConfig"`
	Tags                       []shared.Tag                                    `json:"tags"`
	TargetSelection            *CreateJobRequestBodyTargetSelectionEnum        `json:"targetSelection"`
	Targets                    []string                                        `json:"targets"`
	TimeoutConfig              *CreateJobRequestBodyTimeoutConfig              `json:"timeoutConfig"`
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
