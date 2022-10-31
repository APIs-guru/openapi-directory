package operations

import (
	"openapi/pkg/models/shared"
)

type EnableDirectoryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type EnableDirectoryRequest struct {
	Headers EnableDirectoryHeaders
}

type EnableDirectoryResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	DirectoryDeletedException  *interface{}
	EnableDirectoryResponse    *shared.EnableDirectoryResponse
	InternalServiceException   *interface{}
	InvalidArnException        *interface{}
	LimitExceededException     *interface{}
	ResourceNotFoundException  *interface{}
	RetryableConflictException *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
