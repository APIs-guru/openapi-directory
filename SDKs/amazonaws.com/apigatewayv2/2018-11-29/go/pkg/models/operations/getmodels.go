package operations

import (
	"openapi/pkg/models/shared"
)

type GetModelsPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type GetModelsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetModelsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModelsRequest struct {
	PathParams  GetModelsPathParams
	QueryParams GetModelsQueryParams
	Headers     GetModelsHeaders
}

type GetModelsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetModelsResponse        *shared.GetModelsResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
