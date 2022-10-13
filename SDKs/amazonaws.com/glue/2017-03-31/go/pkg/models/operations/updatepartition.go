package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePartitionXAmzTargetEnum string

const (
	UpdatePartitionXAmzTargetEnumAwsGlueUpdatePartition UpdatePartitionXAmzTargetEnum = "AWSGlue.UpdatePartition"
)

type UpdatePartitionHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePartitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdatePartitionRequest struct {
	Headers UpdatePartitionHeaders
	Request shared.UpdatePartitionRequest `request:"mediaType=application/json"`
}

type UpdatePartitionResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GlueEncryptionException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
	UpdatePartitionResponse   map[string]interface{}
}
