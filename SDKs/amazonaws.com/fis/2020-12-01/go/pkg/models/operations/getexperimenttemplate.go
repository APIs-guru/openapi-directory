package operations

import (
	"openapi/pkg/models/shared"
)

type GetExperimentTemplatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetExperimentTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetExperimentTemplateRequest struct {
	PathParams GetExperimentTemplatePathParams
	Headers    GetExperimentTemplateHeaders
}

type GetExperimentTemplateResponse struct {
	ContentType                   string
	GetExperimentTemplateResponse *shared.GetExperimentTemplateResponse
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
