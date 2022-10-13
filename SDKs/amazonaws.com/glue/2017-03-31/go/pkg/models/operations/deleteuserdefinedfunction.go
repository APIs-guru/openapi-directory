package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserDefinedFunctionXAmzTargetEnum string

const (
	DeleteUserDefinedFunctionXAmzTargetEnumAwsGlueDeleteUserDefinedFunction DeleteUserDefinedFunctionXAmzTargetEnum = "AWSGlue.DeleteUserDefinedFunction"
)

type DeleteUserDefinedFunctionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteUserDefinedFunctionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteUserDefinedFunctionRequest struct {
	Headers DeleteUserDefinedFunctionHeaders
	Request shared.DeleteUserDefinedFunctionRequest `request:"mediaType=application/json"`
}

type DeleteUserDefinedFunctionResponse struct {
	ContentType                       string
	DeleteUserDefinedFunctionResponse map[string]interface{}
	EntityNotFoundException           *interface{}
	InternalServiceException          *interface{}
	InvalidInputException             *interface{}
	OperationTimeoutException         *interface{}
	StatusCode                        int64
}
