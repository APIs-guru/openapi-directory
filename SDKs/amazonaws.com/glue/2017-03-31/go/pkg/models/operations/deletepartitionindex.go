package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePartitionIndexXAmzTargetEnum string

const (
	DeletePartitionIndexXAmzTargetEnumAwsGlueDeletePartitionIndex DeletePartitionIndexXAmzTargetEnum = "AWSGlue.DeletePartitionIndex"
)

type DeletePartitionIndexHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePartitionIndexXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeletePartitionIndexRequest struct {
	Headers DeletePartitionIndexHeaders
	Request shared.DeletePartitionIndexRequest `request:"mediaType=application/json"`
}

type DeletePartitionIndexResponse struct {
	ConflictException            *interface{}
	ContentType                  string
	DeletePartitionIndexResponse map[string]interface{}
	EntityNotFoundException      *interface{}
	GlueEncryptionException      *interface{}
	InternalServiceException     *interface{}
	InvalidInputException        *interface{}
	OperationTimeoutException    *interface{}
	StatusCode                   int64
}
