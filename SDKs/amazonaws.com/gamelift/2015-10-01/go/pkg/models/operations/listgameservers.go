package operations

import (
	"openapi/pkg/models/shared"
)

type ListGameServersQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListGameServersXAmzTargetEnum string

const (
	ListGameServersXAmzTargetEnumGameLiftListGameServers ListGameServersXAmzTargetEnum = "GameLift.ListGameServers"
)

type ListGameServersHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListGameServersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListGameServersRequest struct {
	QueryParams ListGameServersQueryParams
	Headers     ListGameServersHeaders
	Request     shared.ListGameServersInput `request:"mediaType=application/json"`
}

type ListGameServersResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	ListGameServersOutput    *shared.ListGameServersOutput
	StatusCode               int64
	UnauthorizedException    *interface{}
}
