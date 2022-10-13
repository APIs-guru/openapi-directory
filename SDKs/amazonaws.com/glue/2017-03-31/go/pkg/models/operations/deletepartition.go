package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePartitionXAmzTargetEnum string

const (
	DeletePartitionXAmzTargetEnumAwsGlueDeletePartition DeletePartitionXAmzTargetEnum = "AWSGlue.DeletePartition"
)

type DeletePartitionHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePartitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeletePartitionRequest struct {
	Headers DeletePartitionHeaders
	Request shared.DeletePartitionRequest `request:"mediaType=application/json"`
}

type DeletePartitionResponse struct {
	ContentType               string
	DeletePartitionResponse   map[string]interface{}
	EntityNotFoundException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
