package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateControlPathParams struct {
	ControlID string `pathParam:"style=simple,explode=false,name=controlId"`
}

type UpdateControlHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateControlRequestBody struct {
	ActionPlanInstructions *string                       `json:"actionPlanInstructions,omitempty"`
	ActionPlanTitle        *string                       `json:"actionPlanTitle,omitempty"`
	ControlMappingSources  []shared.ControlMappingSource `json:"controlMappingSources"`
	Description            *string                       `json:"description,omitempty"`
	Name                   string                        `json:"name"`
	TestingInformation     *string                       `json:"testingInformation,omitempty"`
}

type UpdateControlRequest struct {
	PathParams UpdateControlPathParams
	Headers    UpdateControlHeaders
	Request    UpdateControlRequestBody `request:"mediaType=application/json"`
}

type UpdateControlResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateControlResponse     *shared.UpdateControlResponse
	ValidationException       *interface{}
}
