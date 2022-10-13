package operations

import (
	"openapi/pkg/models/shared"
)

type ListEventIntegrationsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListEventIntegrationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListEventIntegrationsRequest struct {
	QueryParams ListEventIntegrationsQueryParams
	Headers     ListEventIntegrationsHeaders
}

type ListEventIntegrationsResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServiceError          *interface{}
	InvalidRequestException       *interface{}
	ListEventIntegrationsResponse *shared.ListEventIntegrationsResponse
	StatusCode                    int64
	ThrottlingException           *interface{}
}
