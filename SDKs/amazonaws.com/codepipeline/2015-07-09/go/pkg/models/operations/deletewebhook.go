package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWebhookXAmzTargetEnum string

const (
	DeleteWebhookXAmzTargetEnumCodePipeline20150709DeleteWebhook DeleteWebhookXAmzTargetEnum = "CodePipeline_20150709.DeleteWebhook"
)

type DeleteWebhookHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteWebhookXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteWebhookRequest struct {
	Headers DeleteWebhookHeaders
	Request shared.DeleteWebhookInput `request:"mediaType=application/json"`
}

type DeleteWebhookResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteWebhookOutput             map[string]interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
