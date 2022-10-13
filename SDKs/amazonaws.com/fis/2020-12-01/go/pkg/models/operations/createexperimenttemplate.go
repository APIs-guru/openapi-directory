package operations

import (
	"openapi/pkg/models/shared"
)

type CreateExperimentTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateExperimentTemplateRequestBody struct {
	Actions        map[string]shared.CreateExperimentTemplateActionInput `json:"actions"`
	ClientToken    string                                                `json:"clientToken"`
	Description    string                                                `json:"description"`
	RoleArn        string                                                `json:"roleArn"`
	StopConditions []shared.CreateExperimentTemplateStopConditionInput   `json:"stopConditions"`
	Tags           map[string]string                                     `json:"tags"`
	Targets        map[string]shared.CreateExperimentTemplateTargetInput `json:"targets"`
}

type CreateExperimentTemplateRequest struct {
	Headers CreateExperimentTemplateHeaders
	Request CreateExperimentTemplateRequestBody `request:"mediaType=application/json"`
}

type CreateExperimentTemplateResponse struct {
	ConflictException                *interface{}
	ContentType                      string
	CreateExperimentTemplateResponse *shared.CreateExperimentTemplateResponse
	ResourceNotFoundException        *interface{}
	ServiceQuotaExceededException    *interface{}
	StatusCode                       int64
	ValidationException              *interface{}
}
