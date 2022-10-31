package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeletePartitionXAmzTargetEnum string

const (
	BatchDeletePartitionXAmzTargetEnumAwsGlueBatchDeletePartition BatchDeletePartitionXAmzTargetEnum = "AWSGlue.BatchDeletePartition"
)

type BatchDeletePartitionHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDeletePartitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
