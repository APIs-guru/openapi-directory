package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDirectoryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type CreateDirectoryRequestBody struct {
	Name string `json:"Name"`
}

type CreateDirectoryRequest struct {
	Headers CreateDirectoryHeaders
	Request CreateDirectoryRequestBody `request:"mediaType=application/json"`
}

type CreateDirectoryResponse struct {
	AccessDeniedException           *shared.AccessDeniedException
	ContentType                     string
	CreateDirectoryResponse         *shared.CreateDirectoryResponse
	DirectoryAlreadyExistsException *shared.DirectoryAlreadyExistsException
	InternalServiceException        *shared.InternalServiceException
	InvalidArnException             *shared.InvalidArnException
	LimitExceededException          *shared.LimitExceededException
	ResourceNotFoundException       *shared.ResourceNotFoundException
	RetryableConflictException      *shared.RetryableConflictException
	StatusCode                      int64
	ValidationException             *shared.ValidationException
}
