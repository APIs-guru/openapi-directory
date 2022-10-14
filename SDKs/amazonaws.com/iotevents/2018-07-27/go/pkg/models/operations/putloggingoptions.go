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
	DetectorDebugOptions []shared.DetectorDebugOption `json:"detectorDebugOptions,omitempty"`
	Enabled              *bool                        `json:"enabled,omitempty"`
	Level                *shared.LoggingLevelEnum     `json:"level,omitempty"`
	RoleArn              *string                      `json:"roleArn,omitempty"`
}

type PutLoggingOptionsRequestBody struct {
	LoggingOptions PutLoggingOptionsRequestBodyLoggingOptions `json:"loggingOptions"`
}

type PutLoggingOptionsRequest struct {
	Headers PutLoggingOptionsHeaders
	Request PutLoggingOptionsRequestBody `request:"mediaType=application/json"`
}

type PutLoggingOptionsResponse struct {
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ResourceInUseException        *interface{}
	ServiceUnavailableException   *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UnsupportedOperationException *interface{}
}
