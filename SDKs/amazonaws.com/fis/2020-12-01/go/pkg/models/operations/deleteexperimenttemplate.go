package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteExperimentTemplatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteExperimentTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteExperimentTemplateRequest struct {
	PathParams DeleteExperimentTemplatePathParams
	Headers    DeleteExperimentTemplateHeaders
}

type DeleteExperimentTemplateResponse struct {
	ContentType                      string
	DeleteExperimentTemplateResponse *shared.DeleteExperimentTemplateResponse
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ValidationException              *interface{}
}
