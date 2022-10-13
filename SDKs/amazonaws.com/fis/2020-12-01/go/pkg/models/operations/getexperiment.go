package operations

import (
	"openapi/pkg/models/shared"
)

type GetExperimentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetExperimentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetExperimentRequest struct {
	PathParams GetExperimentPathParams
	Headers    GetExperimentHeaders
}

type GetExperimentResponse struct {
	ContentType               string
	GetExperimentResponse     *shared.GetExperimentResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
