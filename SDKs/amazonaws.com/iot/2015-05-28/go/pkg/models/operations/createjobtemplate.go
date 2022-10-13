package operations

import (
	"openapi/pkg/models/shared"
)

type CreateJobTemplatePathParams struct {
	JobTemplateID string `pathParam:"style=simple,explode=false,name=jobTemplateId"`
}

type CreateJobTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateJobTemplateRequestBodyAbortConfig struct {
	CriteriaList []shared.AbortCriteria `json:"criteriaList"`
}

type CreateJobTemplateRequestBodyJobExecutionsRolloutConfig struct {
	ExponentialRate  *shared.ExponentialRolloutRate `json:"exponentialRate"`
	MaximumPerMinute *int64                         `json:"maximumPerMinute"`
}

type CreateJobTemplateRequestBodyPresignedURLConfig struct {
	ExpiresInSec *int64  `json:"expiresInSec"`
	RoleArn      *string `json:"roleArn"`
}

type CreateJobTemplateRequestBodyTimeoutConfig struct {
	InProgressTimeoutInMinutes *int64 `json:"inProgressTimeoutInMinutes"`
}

type CreateJobTemplateRequestBody struct {
	AbortConfig                *CreateJobTemplateRequestBodyAbortConfig                `json:"abortConfig"`
	Description                string                                                  `json:"description"`
	Document                   *string                                                 `json:"document"`
	DocumentSource             *string                                                 `json:"documentSource"`
	JobArn                     *string                                                 `json:"jobArn"`
	JobExecutionsRolloutConfig *CreateJobTemplateRequestBodyJobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig"`
	PresignedURLConfig         *CreateJobTemplateRequestBodyPresignedURLConfig         `json:"presignedUrlConfig"`
	Tags                       []shared.Tag                                            `json:"tags"`
	TimeoutConfig              *CreateJobTemplateRequestBodyTimeoutConfig              `json:"timeoutConfig"`
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
