package operations

import (
	"openapi/pkg/models/shared"
)

type CreateScriptXAmzTargetEnum string

const (
	CreateScriptXAmzTargetEnumGameLiftCreateScript CreateScriptXAmzTargetEnum = "GameLift.CreateScript"
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
	Request shared.CreateScriptInput `request:"mediaType=application/json"`
}

type CreateScriptResponse struct {
	ConflictException        *interface{}
	ContentType              string
	CreateScriptOutput       *shared.CreateScriptOutput
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	StatusCode               int64
	TaggingFailedException   *interface{}
	UnauthorizedException    *interface{}
}
