package operations

import (
	"openapi/pkg/models/shared"
)

type ResolveAliasXAmzTargetEnum string

const (
	ResolveAliasXAmzTargetEnumGameLiftResolveAlias ResolveAliasXAmzTargetEnum = "GameLift.ResolveAlias"
)

type ResolveAliasHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ResolveAliasXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
