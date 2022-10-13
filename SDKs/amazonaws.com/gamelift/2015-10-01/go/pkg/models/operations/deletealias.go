package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAliasXAmzTargetEnum string

const (
	DeleteAliasXAmzTargetEnumGameLiftDeleteAlias DeleteAliasXAmzTargetEnum = "GameLift.DeleteAlias"
)

type DeleteAliasHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAliasXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAliasRequest struct {
	Headers DeleteAliasHeaders
	Request shared.DeleteAliasInput `request:"mediaType=application/json"`
}

type DeleteAliasResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TaggingFailedException   *interface{}
	UnauthorizedException    *interface{}
}
