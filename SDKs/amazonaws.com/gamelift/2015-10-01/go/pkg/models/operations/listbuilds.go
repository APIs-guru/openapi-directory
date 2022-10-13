package operations

import (
	"openapi/pkg/models/shared"
)

type ListBuildsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListBuildsXAmzTargetEnum string

const (
	ListBuildsXAmzTargetEnumGameLiftListBuilds ListBuildsXAmzTargetEnum = "GameLift.ListBuilds"
)

type ListBuildsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListBuildsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListBuildsRequest struct {
	QueryParams ListBuildsQueryParams
	Headers     ListBuildsHeaders
	Request     shared.ListBuildsInput `request:"mediaType=application/json"`
}

type ListBuildsResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	ListBuildsOutput         *shared.ListBuildsOutput
	StatusCode               int64
	UnauthorizedException    *interface{}
}
