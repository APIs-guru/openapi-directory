package operations

import (
	"openapi/pkg/models/shared"
)

type StartExperimentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartExperimentRequestBody struct {
	ClientToken          string            `json:"clientToken"`
	ExperimentTemplateID string            `json:"experimentTemplateId"`
	Tags                 map[string]string `json:"tags"`
}

type StartExperimentRequest struct {
	Headers StartExperimentHeaders
	Request StartExperimentRequestBody `request:"mediaType=application/json"`
}

type StartExperimentResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StartExperimentResponse       *shared.StartExperimentResponse
	StatusCode                    int64
	ValidationException           *interface{}
}
