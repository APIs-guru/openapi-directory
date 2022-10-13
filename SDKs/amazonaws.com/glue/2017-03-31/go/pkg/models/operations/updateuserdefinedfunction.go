package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserDefinedFunctionXAmzTargetEnum string

const (
	UpdateUserDefinedFunctionXAmzTargetEnumAwsGlueUpdateUserDefinedFunction UpdateUserDefinedFunctionXAmzTargetEnum = "AWSGlue.UpdateUserDefinedFunction"
)

type UpdateUserDefinedFunctionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateUserDefinedFunctionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateUserDefinedFunctionRequest struct {
	Headers UpdateUserDefinedFunctionHeaders
	Request shared.UpdateUserDefinedFunctionRequest `request:"mediaType=application/json"`
}

type UpdateUserDefinedFunctionResponse struct {
	ContentType                       string
	EntityNotFoundException           *interface{}
	GlueEncryptionException           *interface{}
	InternalServiceException          *interface{}
	InvalidInputException             *interface{}
	OperationTimeoutException         *interface{}
	StatusCode                        int64
	UpdateUserDefinedFunctionResponse map[string]interface{}
}
