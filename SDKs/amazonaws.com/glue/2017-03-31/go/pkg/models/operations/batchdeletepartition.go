package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeletePartitionXAmzTargetEnum string

const (
	BatchDeletePartitionXAmzTargetEnumAwsGlueBatchDeletePartition BatchDeletePartitionXAmzTargetEnum = "AWSGlue.BatchDeletePartition"
)

type BatchDeletePartitionHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDeletePartitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchDeletePartitionRequest struct {
	Headers BatchDeletePartitionHeaders
	Request shared.BatchDeletePartitionRequest `request:"mediaType=application/json"`
}

type BatchDeletePartitionResponse struct {
	BatchDeletePartitionResponse *shared.BatchDeletePartitionResponse
	ContentType                  string
	EntityNotFoundException      *interface{}
	InternalServiceException     *interface{}
	InvalidInputException        *interface{}
	OperationTimeoutException    *interface{}
	StatusCode                   int64
}
