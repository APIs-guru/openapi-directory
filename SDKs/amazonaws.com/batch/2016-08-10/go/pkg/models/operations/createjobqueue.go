package operations

import (
	"openapi/pkg/models/shared"
)

type CreateJobQueueHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateJobQueueRequestBodyStateEnum string

const (
	CreateJobQueueRequestBodyStateEnumEnabled  CreateJobQueueRequestBodyStateEnum = "ENABLED"
	CreateJobQueueRequestBodyStateEnumDisabled CreateJobQueueRequestBodyStateEnum = "DISABLED"
)

type CreateJobQueueRequestBody struct {
	ComputeEnvironmentOrder []shared.ComputeEnvironmentOrder    `json:"computeEnvironmentOrder"`
	JobQueueName            string                              `json:"jobQueueName"`
	Priority                int64                               `json:"priority"`
	State                   *CreateJobQueueRequestBodyStateEnum `json:"state,omitempty"`
	Tags                    map[string]string                   `json:"tags,omitempty"`
}

type CreateJobQueueRequest struct {
	Headers CreateJobQueueHeaders
	Request CreateJobQueueRequestBody `request:"mediaType=application/json"`
}

type CreateJobQueueResponse struct {
	ClientException        *interface{}
	ContentType            string
	CreateJobQueueResponse *shared.CreateJobQueueResponse
	ServerException        *interface{}
	StatusCode             int64
}
