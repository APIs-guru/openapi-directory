package operations

import (
	"openapi/pkg/models/shared"
)

type ListGameServerGroupsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListGameServerGroupsXAmzTargetEnum string

const (
	ListGameServerGroupsXAmzTargetEnumGameLiftListGameServerGroups ListGameServerGroupsXAmzTargetEnum = "GameLift.ListGameServerGroups"
)

type ListGameServerGroupsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListGameServerGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListGameServerGroupsRequest struct {
	QueryParams ListGameServerGroupsQueryParams
	Headers     ListGameServerGroupsHeaders
	Request     shared.ListGameServerGroupsInput `request:"mediaType=application/json"`
}

type ListGameServerGroupsResponse struct {
	ContentType                string
	InternalServiceException   *interface{}
	InvalidRequestException    *interface{}
	ListGameServerGroupsOutput *shared.ListGameServerGroupsOutput
	StatusCode                 int64
	UnauthorizedException      *interface{}
}
