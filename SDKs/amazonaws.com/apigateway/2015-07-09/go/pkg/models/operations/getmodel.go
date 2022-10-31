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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
