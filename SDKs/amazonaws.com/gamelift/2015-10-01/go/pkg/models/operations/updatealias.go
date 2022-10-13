package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAliasXAmzTargetEnum string

const (
	UpdateAliasXAmzTargetEnumGameLiftUpdateAlias UpdateAliasXAmzTargetEnum = "GameLift.UpdateAlias"
)

type UpdateAliasHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAliasXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateAliasRequest struct {
	Headers UpdateAliasHeaders
	Request shared.UpdateAliasInput `request:"mediaType=application/json"`
}

type UpdateAliasResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
	UpdateAliasOutput        *shared.UpdateAliasOutput
}
