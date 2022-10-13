package operations

import (
	"openapi/pkg/models/shared"
)

type PutLoggingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutLoggingOptionsRequestBodyLoggingOptions struct {
	Enabled *bool                    `json:"enabled"`
	Level   *shared.LoggingLevelEnum `json:"level"`
	RoleArn *string                  `json:"roleArn"`
}

type PutLoggingOptionsRequestBody struct {
	LoggingOptions PutLoggingOptionsRequestBodyLoggingOptions `json:"loggingOptions"`
}

type PutLoggingOptionsRequest struct {
	Headers PutLoggingOptionsHeaders
	Request PutLoggingOptionsRequestBody `request:"mediaType=application/json"`
}

type PutLoggingOptionsResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
