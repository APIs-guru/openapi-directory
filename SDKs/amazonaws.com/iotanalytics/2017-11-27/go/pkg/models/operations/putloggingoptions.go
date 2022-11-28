package operations

import (
	"openapi/pkg/models/shared"
)

type PutLoggingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// PutLoggingOptionsRequestBodyLoggingOptions
// Information about logging options.
type PutLoggingOptionsRequestBodyLoggingOptions struct {
	Enabled *bool                    `json:"enabled,omitempty"`
	Level   *shared.LoggingLevelEnum `json:"level,omitempty"`
	RoleArn *string                  `json:"roleArn,omitempty"`
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
