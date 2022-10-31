package operations

import (
	"openapi/pkg/models/shared"
)

type BatchWriteHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type BatchWriteRequestBody struct {
	Operations []shared.BatchWriteOperation `json:"Operations"`
}

type BatchWriteRequest struct {
	Headers BatchWriteHeaders
	Request BatchWriteRequestBody `request:"mediaType=application/json"`
}

type BatchWriteResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	BatchWriteException          *shared.BatchWriteException
	BatchWriteResponse           *shared.BatchWriteResponse
	ContentType                  string
	DirectoryNotEnabledException *shared.DirectoryNotEnabledException
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	LimitExceededException       *shared.LimitExceededException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	ValidationException          *shared.ValidationException
}
