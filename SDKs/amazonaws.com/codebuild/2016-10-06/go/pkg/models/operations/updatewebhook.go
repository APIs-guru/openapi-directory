package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWebhookXAmzTargetEnum string

const (
	UpdateWebhookXAmzTargetEnumCodeBuild20161006UpdateWebhook UpdateWebhookXAmzTargetEnum = "CodeBuild_20161006.UpdateWebhook"
)

type UpdateWebhookHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateWebhookXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateWebhookRequest struct {
	Headers UpdateWebhookHeaders
	Request shared.UpdateWebhookInput `request:"mediaType=application/json"`
}

type UpdateWebhookResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	OAuthProviderException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateWebhookOutput       *shared.UpdateWebhookOutput
}
