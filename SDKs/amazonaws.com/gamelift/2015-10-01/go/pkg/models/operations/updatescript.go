package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateScriptXAmzTargetEnum string

const (
	UpdateScriptXAmzTargetEnumGameLiftUpdateScript UpdateScriptXAmzTargetEnum = "GameLift.UpdateScript"
)

type UpdateScriptHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateScriptXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateScriptRequest struct {
	Headers UpdateScriptHeaders
	Request shared.UpdateScriptInput `request:"mediaType=application/json"`
}

type UpdateScriptResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
	UpdateScriptOutput       *shared.UpdateScriptOutput
}
