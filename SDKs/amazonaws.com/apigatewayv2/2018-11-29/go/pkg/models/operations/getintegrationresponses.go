package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationResponsesPathParams struct {
	APIID         string `pathParam:"style=simple,explode=false,name=apiId"`
	IntegrationID string `pathParam:"style=simple,explode=false,name=integrationId"`
}

type GetIntegrationResponsesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetIntegrationResponsesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetIntegrationResponsesRequest struct {
	PathParams  GetIntegrationResponsesPathParams
	QueryParams GetIntegrationResponsesQueryParams
	Headers     GetIntegrationResponsesHeaders
}

type GetIntegrationResponsesResponse struct {
	BadRequestException             *interface{}
	ContentType                     string
	GetIntegrationResponsesResponse *shared.GetIntegrationResponsesResponse
	NotFoundException               *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
