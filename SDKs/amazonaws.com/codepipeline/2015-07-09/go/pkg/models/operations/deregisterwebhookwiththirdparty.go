package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterWebhookWithThirdPartyXAmzTargetEnum string

const (
	DeregisterWebhookWithThirdPartyXAmzTargetEnumCodePipeline20150709DeregisterWebhookWithThirdParty DeregisterWebhookWithThirdPartyXAmzTargetEnum = "CodePipeline_20150709.DeregisterWebhookWithThirdParty"
)

type DeregisterWebhookWithThirdPartyHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterWebhookWithThirdPartyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeregisterWebhookWithThirdPartyRequest struct {
	Headers DeregisterWebhookWithThirdPartyHeaders
	Request shared.DeregisterWebhookWithThirdPartyInput `request:"mediaType=application/json"`
}

type DeregisterWebhookWithThirdPartyResponse struct {
	ContentType                           string
	DeregisterWebhookWithThirdPartyOutput map[string]interface{}
	StatusCode                            int64
	ValidationException                   *interface{}
	WebhookNotFoundException              *interface{}
}
