package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteExperimentTemplatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteExperimentTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
