package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeleteTableXAmzTargetEnum string

const (
	BatchDeleteTableXAmzTargetEnumAwsGlueBatchDeleteTable BatchDeleteTableXAmzTargetEnum = "AWSGlue.BatchDeleteTable"
)

type BatchDeleteTableHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDeleteTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchDeleteTableRequest struct {
	Headers BatchDeleteTableHeaders
	Request shared.BatchDeleteTableRequest `request:"mediaType=application/json"`
}

type BatchDeleteTableResponse struct {
	BatchDeleteTableResponse  *shared.BatchDeleteTableResponse
	ContentType               string
	EntityNotFoundException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
