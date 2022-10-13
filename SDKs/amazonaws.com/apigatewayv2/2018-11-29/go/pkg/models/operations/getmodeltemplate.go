package operations

import (
	"openapi/pkg/models/shared"
)

type GetModelTemplatePathParams struct {
	APIID   string `pathParam:"style=simple,explode=false,name=apiId"`
	ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
}

type GetModelTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModelTemplateRequest struct {
	PathParams GetModelTemplatePathParams
	Headers    GetModelTemplateHeaders
}

type GetModelTemplateResponse struct {
	ContentType              string
	GetModelTemplateResponse *shared.GetModelTemplateResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
