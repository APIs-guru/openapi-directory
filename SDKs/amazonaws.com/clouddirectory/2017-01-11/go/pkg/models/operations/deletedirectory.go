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
	AccessDeniedException         *interface{}
	ContentType                   string
	DeleteDirectoryResponse       *shared.DeleteDirectoryResponse
	DirectoryDeletedException     *interface{}
	DirectoryNotDisabledException *interface{}
	InternalServiceException      *interface{}
	InvalidArnException           *interface{}
	LimitExceededException        *interface{}
	ResourceNotFoundException     *interface{}
	RetryableConflictException    *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
