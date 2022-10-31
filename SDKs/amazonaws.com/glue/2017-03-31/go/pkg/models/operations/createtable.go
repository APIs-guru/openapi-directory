package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTableXAmzTargetEnum string

const (
	CreateTableXAmzTargetEnumAwsGlueCreateTable CreateTableXAmzTargetEnum = "AWSGlue.CreateTable"
)

type CreateTableHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTableXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateTableRequest struct {
	Headers CreateTableHeaders
	Request shared.CreateTableRequest `request:"mediaType=application/json"`
}

type CreateTableResponse struct {
	AlreadyExistsException               *interface{}
	ConcurrentModificationException      *interface{}
	ContentType                          string
	CreateTableResponse                  map[string]interface{}
	EntityNotFoundException              *interface{}
	GlueEncryptionException              *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
}
