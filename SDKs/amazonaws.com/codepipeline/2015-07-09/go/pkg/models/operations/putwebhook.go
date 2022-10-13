package operations

import (
	"openapi/pkg/models/shared"
)

type PutWebhookXAmzTargetEnum string

const (
	PutWebhookXAmzTargetEnumCodePipeline20150709PutWebhook PutWebhookXAmzTargetEnum = "CodePipeline_20150709.PutWebhook"
)

type PutWebhookHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutWebhookXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutWebhookRequest struct {
	Headers PutWebhookHeaders
	Request shared.PutWebhookInput `request:"mediaType=application/json"`
}

type PutWebhookResponse struct {
	ConcurrentModificationException                 *interface{}
	ContentType                                     string
	InvalidTagsException                            *interface{}
	InvalidWebhookAuthenticationParametersException *interface{}
	InvalidWebhookFilterPatternException            *interface{}
	LimitExceededException                          *interface{}
	PipelineNotFoundException                       *interface{}
	PutWebhookOutput                                *shared.PutWebhookOutput
	StatusCode                                      int64
	TooManyTagsException                            *interface{}
	ValidationException                             *interface{}
}
