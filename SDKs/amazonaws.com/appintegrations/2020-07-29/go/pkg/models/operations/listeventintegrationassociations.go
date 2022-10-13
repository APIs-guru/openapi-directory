package operations

import (
	"openapi/pkg/models/shared"
)

type ListEventIntegrationAssociationsPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=Name"`
}

type ListEventIntegrationAssociationsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListEventIntegrationAssociationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListEventIntegrationAssociationsRequest struct {
	PathParams  ListEventIntegrationAssociationsPathParams
	QueryParams ListEventIntegrationAssociationsQueryParams
	Headers     ListEventIntegrationAssociationsHeaders
}

type ListEventIntegrationAssociationsResponse struct {
	AccessDeniedException                    *interface{}
	ContentType                              string
	InternalServiceError                     *interface{}
	InvalidRequestException                  *interface{}
	ListEventIntegrationAssociationsResponse *shared.ListEventIntegrationAssociationsResponse
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	ThrottlingException                      *interface{}
}
