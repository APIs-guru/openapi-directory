package operations

import (
	"openapi/pkg/models/shared"
)

type GetV2LoggingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetV2LoggingOptionsRequest struct {
	Headers GetV2LoggingOptionsHeaders
}

type GetV2LoggingOptionsResponse struct {
	ContentType                 string
	GetV2LoggingOptionsResponse *shared.GetV2LoggingOptionsResponse
	InternalException           *interface{}
	NotConfiguredException      *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
