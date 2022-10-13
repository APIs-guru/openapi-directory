package operations

import (
	"openapi/pkg/models/shared"
)

type ResolveAliasXAmzTargetEnum string

const (
	ResolveAliasXAmzTargetEnumGameLiftResolveAlias ResolveAliasXAmzTargetEnum = "GameLift.ResolveAlias"
)

type ResolveAliasHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ResolveAliasXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ResolveAliasRequest struct {
	Headers ResolveAliasHeaders
	Request shared.ResolveAliasInput `request:"mediaType=application/json"`
}

type ResolveAliasResponse struct {
	ContentType                      string
	InternalServiceException         *interface{}
	InvalidRequestException          *interface{}
	NotFoundException                *interface{}
	ResolveAliasOutput               *shared.ResolveAliasOutput
	StatusCode                       int64
	TerminalRoutingStrategyException *interface{}
	UnauthorizedException            *interface{}
}
