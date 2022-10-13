package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationsPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type GetIntegrationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetIntegrationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetIntegrationsRequest struct {
	PathParams  GetIntegrationsPathParams
	QueryParams GetIntegrationsQueryParams
	Headers     GetIntegrationsHeaders
}

type GetIntegrationsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetIntegrationsResponse  *shared.GetIntegrationsResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
