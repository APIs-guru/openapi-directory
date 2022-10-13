package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeleteTableVersionXAmzTargetEnum string

const (
	BatchDeleteTableVersionXAmzTargetEnumAwsGlueBatchDeleteTableVersion BatchDeleteTableVersionXAmzTargetEnum = "AWSGlue.BatchDeleteTableVersion"
)

type BatchDeleteTableVersionHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDeleteTableVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchDeleteTableVersionRequest struct {
	Headers BatchDeleteTableVersionHeaders
	Request shared.BatchDeleteTableVersionRequest `request:"mediaType=application/json"`
}

type BatchDeleteTableVersionResponse struct {
	BatchDeleteTableVersionResponse *shared.BatchDeleteTableVersionResponse
	ContentType                     string
	EntityNotFoundException         *interface{}
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	OperationTimeoutException       *interface{}
	StatusCode                      int64
}
