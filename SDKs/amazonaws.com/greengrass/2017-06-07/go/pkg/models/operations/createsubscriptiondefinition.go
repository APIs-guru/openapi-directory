package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSubscriptionDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateSubscriptionDefinitionRequestBodyInitialVersion struct {
	Subscriptions []shared.Subscription `json:"Subscriptions"`
}

type CreateSubscriptionDefinitionRequestBody struct {
	InitialVersion *CreateSubscriptionDefinitionRequestBodyInitialVersion `json:"InitialVersion"`
	Name           *string                                                `json:"Name"`
	Tags           map[string]string                                      `json:"tags"`
}

type CreateSubscriptionDefinitionRequest struct {
	Headers CreateSubscriptionDefinitionHeaders
	Request CreateSubscriptionDefinitionRequestBody `request:"mediaType=application/json"`
}

type CreateSubscriptionDefinitionResponse struct {
	BadRequestException                  *interface{}
	ContentType                          string
	CreateSubscriptionDefinitionResponse *shared.CreateSubscriptionDefinitionResponse
	StatusCode                           int64
}
