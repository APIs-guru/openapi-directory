package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTableXAmzTargetEnum string

const (
	UpdateTableXAmzTargetEnumAwsGlueUpdateTable UpdateTableXAmzTargetEnum = "AWSGlue.UpdateTable"
)

type UpdateTableHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTableXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateTableRequest struct {
	Headers UpdateTableHeaders
	Request shared.UpdateTableRequest `request:"mediaType=application/json"`
}

type UpdateTableResponse struct {
	ConcurrentModificationException      *interface{}
	ContentType                          string
	EntityNotFoundException              *interface{}
	GlueEncryptionException              *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
	UpdateTableResponse                  map[string]interface{}
}
