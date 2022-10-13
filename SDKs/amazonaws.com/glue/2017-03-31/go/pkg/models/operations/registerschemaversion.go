package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterSchemaVersionXAmzTargetEnum string

const (
	RegisterSchemaVersionXAmzTargetEnumAwsGlueRegisterSchemaVersion RegisterSchemaVersionXAmzTargetEnum = "AWSGlue.RegisterSchemaVersion"
)

type RegisterSchemaVersionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterSchemaVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterSchemaVersionRequest struct {
	Headers RegisterSchemaVersionHeaders
	Request shared.RegisterSchemaVersionInput `request:"mediaType=application/json"`
}

type RegisterSchemaVersionResponse struct {
	AccessDeniedException                *interface{}
	ConcurrentModificationException      *interface{}
	ContentType                          string
	EntityNotFoundException              *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	RegisterSchemaVersionResponse        *shared.RegisterSchemaVersionResponse
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
}
