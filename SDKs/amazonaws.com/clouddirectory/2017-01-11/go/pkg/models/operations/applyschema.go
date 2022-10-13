package operations

import (
	"openapi/pkg/models/shared"
)

type ApplySchemaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type ApplySchemaRequestBody struct {
	PublishedSchemaArn string `json:"PublishedSchemaArn"`
}

type ApplySchemaRequest struct {
	Headers ApplySchemaHeaders
	Request ApplySchemaRequestBody `request:"mediaType=application/json"`
}

type ApplySchemaResponse struct {
	AccessDeniedException        *interface{}
	ApplySchemaResponse          *shared.ApplySchemaResponse
	ContentType                  string
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	InvalidAttachmentException   *interface{}
	LimitExceededException       *interface{}
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	SchemaAlreadyExistsException *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
