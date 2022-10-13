package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWebhookPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type CreateWebhookHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateWebhookRequestBody struct {
	BranchName  string  `json:"branchName"`
	Description *string `json:"description"`
}

type CreateWebhookRequest struct {
	PathParams CreateWebhookPathParams
	Headers    CreateWebhookHeaders
	Request    CreateWebhookRequestBody `request:"mediaType=application/json"`
}

type CreateWebhookResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	CreateWebhookResult              *shared.CreateWebhookResult
	DependentServiceFailureException *interface{}
	InternalFailureException         *interface{}
	LimitExceededException           *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
	UnauthorizedException            *interface{}
}
