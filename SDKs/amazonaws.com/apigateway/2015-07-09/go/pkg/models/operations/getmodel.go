package operations

import (
	"openapi/pkg/models/shared"
)

type GetModelPathParams struct {
	ModelName string `pathParam:"style=simple,explode=false,name=model_name"`
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type GetModelQueryParams struct {
	Flatten *bool `queryParam:"style=form,explode=true,name=flatten"`
}

type GetModelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModelRequest struct {
	PathParams  GetModelPathParams
	QueryParams GetModelQueryParams
	Headers     GetModelHeaders
}

type GetModelResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	Model                    *shared.Model
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
