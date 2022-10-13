package operations

import (
	"openapi/pkg/models/shared"
)

type CreateControlHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateControlRequestBody struct {
	ActionPlanInstructions *string                             `json:"actionPlanInstructions"`
	ActionPlanTitle        *string                             `json:"actionPlanTitle"`
	ControlMappingSources  []shared.CreateControlMappingSource `json:"controlMappingSources"`
	Description            *string                             `json:"description"`
	Name                   string                              `json:"name"`
	Tags                   map[string]string                   `json:"tags"`
	TestingInformation     *string                             `json:"testingInformation"`
}

type CreateControlRequest struct {
	Headers CreateControlHeaders
	Request CreateControlRequestBody `request:"mediaType=application/json"`
}

type CreateControlResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	CreateControlResponse     *shared.CreateControlResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
