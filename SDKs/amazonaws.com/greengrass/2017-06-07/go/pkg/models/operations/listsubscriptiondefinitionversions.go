package operations

import (
	"openapi/pkg/models/shared"
)

type ListSubscriptionDefinitionVersionsPathParams struct {
	SubscriptionDefinitionID string `pathParam:"style=simple,explode=false,name=SubscriptionDefinitionId"`
}

type ListSubscriptionDefinitionVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListSubscriptionDefinitionVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListSubscriptionDefinitionVersionsRequest struct {
	PathParams  ListSubscriptionDefinitionVersionsPathParams
	QueryParams ListSubscriptionDefinitionVersionsQueryParams
	Headers     ListSubscriptionDefinitionVersionsHeaders
}

type ListSubscriptionDefinitionVersionsResponse struct {
	BadRequestException                        *interface{}
	ContentType                                string
	ListSubscriptionDefinitionVersionsResponse *shared.ListSubscriptionDefinitionVersionsResponse
	StatusCode                                 int64
}
