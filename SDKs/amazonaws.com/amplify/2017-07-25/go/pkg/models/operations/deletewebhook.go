package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWebhookPathParams struct {
	WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
}

type DeleteWebhookHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteWebhookRequest struct {
	PathParams DeleteWebhookPathParams
	Headers    DeleteWebhookHeaders
}

type DeleteWebhookResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	DeleteWebhookResult      *shared.DeleteWebhookResult
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
