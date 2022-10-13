package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUserDefinedFunctionXAmzTargetEnum string

const (
	CreateUserDefinedFunctionXAmzTargetEnumAwsGlueCreateUserDefinedFunction CreateUserDefinedFunctionXAmzTargetEnum = "AWSGlue.CreateUserDefinedFunction"
)

type CreateUserDefinedFunctionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateUserDefinedFunctionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateUserDefinedFunctionRequest struct {
	Headers CreateUserDefinedFunctionHeaders
	Request shared.CreateUserDefinedFunctionRequest `request:"mediaType=application/json"`
}

type CreateUserDefinedFunctionResponse struct {
	AlreadyExistsException               *interface{}
	ContentType                          string
	CreateUserDefinedFunctionResponse    map[string]interface{}
	EntityNotFoundException              *interface{}
	GlueEncryptionException              *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
}
