package operations

import (
	"openapi/pkg/models/shared"
)

type ClaimGameServerXAmzTargetEnum string

const (
	ClaimGameServerXAmzTargetEnumGameLiftClaimGameServer ClaimGameServerXAmzTargetEnum = "GameLift.ClaimGameServer"
)

type ClaimGameServerHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ClaimGameServerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ClaimGameServerRequest struct {
	Headers ClaimGameServerHeaders
	Request shared.ClaimGameServerInput `request:"mediaType=application/json"`
}

type ClaimGameServerResponse struct {
	ClaimGameServerOutput    *shared.ClaimGameServerOutput
	ConflictException        *interface{}
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	OutOfCapacityException   *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
