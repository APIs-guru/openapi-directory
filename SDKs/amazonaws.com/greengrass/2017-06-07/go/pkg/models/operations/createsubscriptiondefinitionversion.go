package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSubscriptionDefinitionVersionPathParams struct {
	SubscriptionDefinitionID string `pathParam:"style=simple,explode=false,name=SubscriptionDefinitionId"`
}

type CreateSubscriptionDefinitionVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateSubscriptionDefinitionVersionRequestBody struct {
	Subscriptions []shared.Subscription `json:"Subscriptions,omitempty"`
}

type CreateSubscriptionDefinitionVersionRequest struct {
	PathParams CreateSubscriptionDefinitionVersionPathParams
	Headers    CreateSubscriptionDefinitionVersionHeaders
	Request    CreateSubscriptionDefinitionVersionRequestBody `request:"mediaType=application/json"`
}

type CreateSubscriptionDefinitionVersionResponse struct {
	BadRequestException                         *interface{}
	ContentType                                 string
	CreateSubscriptionDefinitionVersionResponse *shared.CreateSubscriptionDefinitionVersionResponse
	StatusCode                                  int64
}
