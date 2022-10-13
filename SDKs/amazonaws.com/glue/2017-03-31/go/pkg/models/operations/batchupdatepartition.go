package operations

import (
	"openapi/pkg/models/shared"
)

type BatchUpdatePartitionXAmzTargetEnum string

const (
	BatchUpdatePartitionXAmzTargetEnumAwsGlueBatchUpdatePartition BatchUpdatePartitionXAmzTargetEnum = "AWSGlue.BatchUpdatePartition"
)

type BatchUpdatePartitionHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchUpdatePartitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchUpdatePartitionRequest struct {
	Headers BatchUpdatePartitionHeaders
	Request shared.BatchUpdatePartitionRequest `request:"mediaType=application/json"`
}

type BatchUpdatePartitionResponse struct {
	BatchUpdatePartitionResponse *shared.BatchUpdatePartitionResponse
	ContentType                  string
	EntityNotFoundException      *interface{}
	GlueEncryptionException      *interface{}
	InternalServiceException     *interface{}
	InvalidInputException        *interface{}
	OperationTimeoutException    *interface{}
	StatusCode                   int64
}
