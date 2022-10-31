package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWebhookXAmzTargetEnum string

const (
	CreateWebhookXAmzTargetEnumCodeBuild20161006CreateWebhook CreateWebhookXAmzTargetEnum = "CodeBuild_20161006.CreateWebhook"
)

type CreateWebhookHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateWebhookXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateWebhookRequest struct {
	Headers CreateWebhookHeaders
	Request shared.CreateWebhookInput `request:"mediaType=application/json"`
}

type CreateWebhookResponse struct {
	ContentType                    string
	CreateWebhookOutput            *shared.CreateWebhookOutput
	InvalidInputException          *interface{}
	OAuthProviderException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
