package operations

import (
	"openapi/pkg/models/shared"
)

type BatchCreatePartitionXAmzTargetEnum string

const (
	BatchCreatePartitionXAmzTargetEnumAwsGlueBatchCreatePartition BatchCreatePartitionXAmzTargetEnum = "AWSGlue.BatchCreatePartition"
)

type BatchCreatePartitionHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchCreatePartitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchCreatePartitionRequest struct {
	Headers BatchCreatePartitionHeaders
	Request shared.BatchCreatePartitionRequest `request:"mediaType=application/json"`
}

type BatchCreatePartitionResponse struct {
	AlreadyExistsException               *interface{}
	BatchCreatePartitionResponse         *shared.BatchCreatePartitionResponse
	ContentType                          string
	EntityNotFoundException              *interface{}
	GlueEncryptionException              *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
}
