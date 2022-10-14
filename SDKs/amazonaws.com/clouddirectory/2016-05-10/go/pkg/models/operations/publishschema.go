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
	MinorVersion *string `json:"MinorVersion,omitempty"`
	Name         *string `json:"Name,omitempty"`
	Version      string  `json:"Version"`
}

type PublishSchemaRequest struct {
	Headers PublishSchemaHeaders
	Request PublishSchemaRequestBody `request:"mediaType=application/json"`
}

type PublishSchemaResponse struct {
	AccessDeniedException           *shared.AccessDeniedException
	ContentType                     string
	InternalServiceException        *shared.InternalServiceException
	InvalidArnException             *shared.InvalidArnException
	LimitExceededException          *shared.LimitExceededException
	PublishSchemaResponse           *shared.PublishSchemaResponse
	ResourceNotFoundException       *shared.ResourceNotFoundException
	RetryableConflictException      *shared.RetryableConflictException
	SchemaAlreadyPublishedException *shared.SchemaAlreadyPublishedException
	StatusCode                      int64
	ValidationException             *shared.ValidationException
}
