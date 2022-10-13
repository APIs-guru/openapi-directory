package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstanceAccessXAmzTargetEnum string

const (
	GetInstanceAccessXAmzTargetEnumGameLiftGetInstanceAccess GetInstanceAccessXAmzTargetEnum = "GameLift.GetInstanceAccess"
)

type GetInstanceAccessHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInstanceAccessXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetInstanceAccessRequest struct {
	Headers GetInstanceAccessHeaders
	Request shared.GetInstanceAccessInput `request:"mediaType=application/json"`
}

type GetInstanceAccessResponse struct {
	ContentType              string
	GetInstanceAccessOutput  *shared.GetInstanceAccessOutput
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
