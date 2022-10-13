package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteScriptXAmzTargetEnum string

const (
	DeleteScriptXAmzTargetEnumGameLiftDeleteScript DeleteScriptXAmzTargetEnum = "GameLift.DeleteScript"
)

type DeleteScriptHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteScriptXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteScriptRequest struct {
	Headers DeleteScriptHeaders
	Request shared.DeleteScriptInput `request:"mediaType=application/json"`
}

type DeleteScriptResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TaggingFailedException   *interface{}
	UnauthorizedException    *interface{}
}
