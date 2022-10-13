package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserDefinedFunctionXAmzTargetEnum string

const (
	GetUserDefinedFunctionXAmzTargetEnumAwsGlueGetUserDefinedFunction GetUserDefinedFunctionXAmzTargetEnum = "AWSGlue.GetUserDefinedFunction"
)

type GetUserDefinedFunctionHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetUserDefinedFunctionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetUserDefinedFunctionRequest struct {
	Headers GetUserDefinedFunctionHeaders
	Request shared.GetUserDefinedFunctionRequest `request:"mediaType=application/json"`
}

type GetUserDefinedFunctionResponse struct {
	ContentType                    string
	EntityNotFoundException        *interface{}
	GetUserDefinedFunctionResponse *shared.GetUserDefinedFunctionResponse
	GlueEncryptionException        *interface{}
	InternalServiceException       *interface{}
	InvalidInputException          *interface{}
	OperationTimeoutException      *interface{}
	StatusCode                     int64
}
