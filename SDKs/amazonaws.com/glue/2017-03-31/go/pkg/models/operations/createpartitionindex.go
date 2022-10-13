package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePartitionIndexXAmzTargetEnum string

const (
	CreatePartitionIndexXAmzTargetEnumAwsGlueCreatePartitionIndex CreatePartitionIndexXAmzTargetEnum = "AWSGlue.CreatePartitionIndex"
)

type CreatePartitionIndexHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePartitionIndexXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePartitionIndexRequest struct {
	Headers CreatePartitionIndexHeaders
	Request shared.CreatePartitionIndexRequest `request:"mediaType=application/json"`
}

type CreatePartitionIndexResponse struct {
	AlreadyExistsException               *interface{}
	ContentType                          string
	CreatePartitionIndexResponse         map[string]interface{}
	EntityNotFoundException              *interface{}
	GlueEncryptionException              *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
}
