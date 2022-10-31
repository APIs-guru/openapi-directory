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
	AccessDeniedException      *shared.AccessDeniedException
	ApplySchemaResponse        *shared.ApplySchemaResponse
	ContentType                string
	InternalServiceException   *shared.InternalServiceException
	InvalidArnException        *shared.InvalidArnException
	InvalidAttachmentException *shared.InvalidAttachmentException
	LimitExceededException     *shared.LimitExceededException
	ResourceNotFoundException  *shared.ResourceNotFoundException
	RetryableConflictException *shared.RetryableConflictException
	StatusCode                 int64
	ValidationException        *shared.ValidationException
}
