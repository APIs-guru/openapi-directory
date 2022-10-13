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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateJobRequestBodyAbortConfig struct {
	CriteriaList []shared.AbortCriteria `json:"criteriaList"`
}

type UpdateJobRequestBodyJobExecutionsRolloutConfig struct {
	ExponentialRate  *shared.ExponentialRolloutRate `json:"exponentialRate"`
	MaximumPerMinute *int64                         `json:"maximumPerMinute"`
}

type UpdateJobRequestBodyPresignedURLConfig struct {
	ExpiresInSec *int64  `json:"expiresInSec"`
	RoleArn      *string `json:"roleArn"`
}

type UpdateJobRequestBodyTimeoutConfig struct {
	InProgressTimeoutInMinutes *int64 `json:"inProgressTimeoutInMinutes"`
}

type UpdateJobRequestBody struct {
	AbortConfig                *UpdateJobRequestBodyAbortConfig                `json:"abortConfig"`
	Description                *string                                         `json:"description"`
	JobExecutionsRolloutConfig *UpdateJobRequestBodyJobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig"`
	PresignedURLConfig         *UpdateJobRequestBodyPresignedURLConfig         `json:"presignedUrlConfig"`
	TimeoutConfig              *UpdateJobRequestBodyTimeoutConfig              `json:"timeoutConfig"`
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
