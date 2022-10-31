package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDimensionPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type UpdateDimensionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateDimensionRequestBody struct {
	StringValues []string `json:"stringValues"`
}

type UpdateDimensionRequest struct {
	PathParams UpdateDimensionPathParams
	Headers    UpdateDimensionHeaders
	Request    UpdateDimensionRequestBody `request:"mediaType=application/json"`
}

type UpdateDimensionResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateDimensionResponse   *shared.UpdateDimensionResponse
}
