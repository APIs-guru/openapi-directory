package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAliasXAmzTargetEnum string

const (
	UpdateAliasXAmzTargetEnumGameLiftUpdateAlias UpdateAliasXAmzTargetEnum = "GameLift.UpdateAlias"
)

type UpdateAliasHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAliasXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
