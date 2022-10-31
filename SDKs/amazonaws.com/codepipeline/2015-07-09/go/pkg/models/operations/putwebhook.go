package operations

import (
	"openapi/pkg/models/shared"
)

type PutWebhookXAmzTargetEnum string

const (
	PutWebhookXAmzTargetEnumCodePipeline20150709PutWebhook PutWebhookXAmzTargetEnum = "CodePipeline_20150709.PutWebhook"
)

type PutWebhookHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutWebhookXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
