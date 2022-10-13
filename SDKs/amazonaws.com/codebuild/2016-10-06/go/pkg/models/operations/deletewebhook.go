package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWebhookXAmzTargetEnum string

const (
	DeleteWebhookXAmzTargetEnumCodeBuild20161006DeleteWebhook DeleteWebhookXAmzTargetEnum = "CodeBuild_20161006.DeleteWebhook"
)

type DeleteWebhookHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteWebhookXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteWebhookRequest struct {
	Headers DeleteWebhookHeaders
	Request shared.DeleteWebhookInput `request:"mediaType=application/json"`
}

type DeleteWebhookResponse struct {
	ContentType               string
	DeleteWebhookOutput       map[string]interface{}
	InvalidInputException     *interface{}
	OAuthProviderException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
