package operations

import (
	"openapi/pkg/models/shared"
)

type GetTableXAmzTargetEnum string

const (
	GetTableXAmzTargetEnumAwsGlueGetTable GetTableXAmzTargetEnum = "AWSGlue.GetTable"
)

type GetTableHeaders struct {
	XAmzAlgorithm     *string                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetTableRequest struct {
	Headers GetTableHeaders
	Request shared.GetTableRequest `request:"mediaType=application/json"`
}

type GetTableResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetTableResponse          *shared.GetTableResponse
	GlueEncryptionException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
