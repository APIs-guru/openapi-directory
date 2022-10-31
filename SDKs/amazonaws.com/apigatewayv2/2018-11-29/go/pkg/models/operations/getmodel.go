package operations

import (
	"openapi/pkg/models/shared"
)

type GetModelPathParams struct {
	APIID   string `pathParam:"style=simple,explode=false,name=apiId"`
	ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
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
	PathParams GetModelPathParams
	Headers    GetModelHeaders
}

type GetModelResponse struct {
	ContentType              string
	GetModelResponse         *shared.GetModelResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
