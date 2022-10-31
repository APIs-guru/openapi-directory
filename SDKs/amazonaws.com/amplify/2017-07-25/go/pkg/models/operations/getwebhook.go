package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebhookPathParams struct {
	WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
}

type GetWebhookHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetWebhookRequest struct {
	PathParams GetWebhookPathParams
	Headers    GetWebhookHeaders
}

type GetWebhookResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetWebhookResult         *shared.GetWebhookResult
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
