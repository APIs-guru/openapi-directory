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
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListGameServerGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
