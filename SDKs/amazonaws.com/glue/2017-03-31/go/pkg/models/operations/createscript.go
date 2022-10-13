package operations

import (
	"openapi/pkg/models/shared"
)

type CreateScriptXAmzTargetEnum string

const (
	CreateScriptXAmzTargetEnumAwsGlueCreateScript CreateScriptXAmzTargetEnum = "AWSGlue.CreateScript"
)

type CreateScriptHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateScriptXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateScriptRequest struct {
	Headers CreateScriptHeaders
	Request shared.CreateScriptRequest `request:"mediaType=application/json"`
}

type CreateScriptResponse struct {
	ContentType               string
	CreateScriptResponse      *shared.CreateScriptResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
