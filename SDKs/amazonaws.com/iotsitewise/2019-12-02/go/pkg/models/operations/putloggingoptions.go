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
// Contains logging options.
type PutLoggingOptionsRequestBodyLoggingOptions struct {
	Level *shared.LoggingLevelEnum `json:"level,omitempty"`
}

type PutLoggingOptionsRequestBody struct {
	LoggingOptions PutLoggingOptionsRequestBodyLoggingOptions `json:"loggingOptions"`
}

type PutLoggingOptionsRequest struct {
	Headers PutLoggingOptionsHeaders
	Request PutLoggingOptionsRequestBody `request:"mediaType=application/json"`
}

type PutLoggingOptionsResponse struct {
	ConflictingOperationException *interface{}
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	PutLoggingOptionsResponse     map[string]interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
