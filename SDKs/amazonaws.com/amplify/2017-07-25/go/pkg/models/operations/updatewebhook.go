package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWebhookPathParams struct {
	WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
}

type UpdateWebhookHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateWebhookRequestBody struct {
	BranchName  *string `json:"branchName,omitempty"`
	Description *string `json:"description,omitempty"`
}

type UpdateWebhookRequest struct {
	PathParams UpdateWebhookPathParams
	Headers    UpdateWebhookHeaders
	Request    UpdateWebhookRequestBody `request:"mediaType=application/json"`
}

type UpdateWebhookResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	DependentServiceFailureException *interface{}
	InternalFailureException         *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
	UnauthorizedException            *interface{}
	UpdateWebhookResult              *shared.UpdateWebhookResult
}
