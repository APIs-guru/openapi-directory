package operations

import (
	"openapi/pkg/models/shared"
)

type PublishSchemaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type PublishSchemaRequestBody struct {
	MinorVersion *string `json:"MinorVersion"`
	Name         *string `json:"Name"`
	Version      string  `json:"Version"`
}

type PublishSchemaRequest struct {
	Headers PublishSchemaHeaders
	Request PublishSchemaRequestBody `request:"mediaType=application/json"`
}

type PublishSchemaResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InternalServiceException        *interface{}
	InvalidArnException             *interface{}
	LimitExceededException          *interface{}
	PublishSchemaResponse           *shared.PublishSchemaResponse
	ResourceNotFoundException       *interface{}
	RetryableConflictException      *interface{}
	SchemaAlreadyPublishedException *interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
