package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionDefinitionPathParams struct {
	SubscriptionDefinitionID string `pathParam:"style=simple,explode=false,name=SubscriptionDefinitionId"`
}

type GetSubscriptionDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSubscriptionDefinitionRequest struct {
	PathParams GetSubscriptionDefinitionPathParams
	Headers    GetSubscriptionDefinitionHeaders
}

type GetSubscriptionDefinitionResponse struct {
	BadRequestException               *interface{}
	ContentType                       string
	GetSubscriptionDefinitionResponse *shared.GetSubscriptionDefinitionResponse
	StatusCode                        int64
}
