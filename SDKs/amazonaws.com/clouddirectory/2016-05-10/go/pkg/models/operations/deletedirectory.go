package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDirectoryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type DeleteDirectoryRequest struct {
	Headers DeleteDirectoryHeaders
}

type DeleteDirectoryResponse struct {
	AccessDeniedException         *shared.AccessDeniedException
	ContentType                   string
	DeleteDirectoryResponse       *shared.DeleteDirectoryResponse
	DirectoryDeletedException     *shared.DirectoryDeletedException
	DirectoryNotDisabledException *shared.DirectoryNotDisabledException
	InternalServiceException      *shared.InternalServiceException
	InvalidArnException           *shared.InvalidArnException
	LimitExceededException        *shared.LimitExceededException
	ResourceNotFoundException     *shared.ResourceNotFoundException
	RetryableConflictException    *shared.RetryableConflictException
	StatusCode                    int64
	ValidationException           *shared.ValidationException
}
