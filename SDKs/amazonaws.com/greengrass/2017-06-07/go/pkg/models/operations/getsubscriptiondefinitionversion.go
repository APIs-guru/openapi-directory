package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionDefinitionVersionPathParams struct {
	SubscriptionDefinitionID        string `pathParam:"style=simple,explode=false,name=SubscriptionDefinitionId"`
	SubscriptionDefinitionVersionID string `pathParam:"style=simple,explode=false,name=SubscriptionDefinitionVersionId"`
}

type GetSubscriptionDefinitionVersionQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetSubscriptionDefinitionVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSubscriptionDefinitionVersionRequest struct {
	PathParams  GetSubscriptionDefinitionVersionPathParams
	QueryParams GetSubscriptionDefinitionVersionQueryParams
	Headers     GetSubscriptionDefinitionVersionHeaders
}

type GetSubscriptionDefinitionVersionResponse struct {
	BadRequestException                      *interface{}
	ContentType                              string
	GetSubscriptionDefinitionVersionResponse *shared.GetSubscriptionDefinitionVersionResponse
	StatusCode                               int64
}
