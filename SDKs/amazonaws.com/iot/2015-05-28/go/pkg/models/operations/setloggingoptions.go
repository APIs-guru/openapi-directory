package operations

import (
	"openapi/pkg/models/shared"
)

type SetLoggingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SetLoggingOptionsRequestBodyLoggingOptionsPayload struct {
	LogLevel *shared.LogLevelEnum `json:"logLevel"`
	RoleArn  *string              `json:"roleArn"`
}

type SetLoggingOptionsRequestBody struct {
	LoggingOptionsPayload SetLoggingOptionsRequestBodyLoggingOptionsPayload `json:"loggingOptionsPayload"`
}

type SetLoggingOptionsRequest struct {
	Headers SetLoggingOptionsHeaders
	Request SetLoggingOptionsRequestBody `request:"mediaType=application/json"`
}

type SetLoggingOptionsResponse struct {
	ContentType                 string
	InternalException           *interface{}
	InvalidRequestException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
