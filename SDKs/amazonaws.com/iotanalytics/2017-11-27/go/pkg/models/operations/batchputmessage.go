package operations

import (
	"openapi/pkg/models/shared"
)

type BatchPutMessageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchPutMessageRequestBody struct {
	ChannelName string           `json:"channelName"`
	Messages    []shared.Message `json:"messages"`
}

type BatchPutMessageRequest struct {
	Headers BatchPutMessageHeaders
	Request BatchPutMessageRequestBody `request:"mediaType=application/json"`
}

type BatchPutMessageResponse struct {
	BatchPutMessageResponse     *shared.BatchPutMessageResponse
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
