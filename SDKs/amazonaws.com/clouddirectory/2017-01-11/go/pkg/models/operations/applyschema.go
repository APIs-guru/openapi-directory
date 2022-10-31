package operations

import (
	"openapi/pkg/models/shared"
)

type ApplySchemaHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
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
