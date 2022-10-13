package operations

import (
	"openapi/pkg/models/shared"
)

type ListRoleAliasesQueryParams struct {
	IsAscendingOrder *bool   `queryParam:"style=form,explode=true,name=isAscendingOrder"`
	Marker           *string `queryParam:"style=form,explode=true,name=marker"`
	PageSize         *int64  `queryParam:"style=form,explode=true,name=pageSize"`
}

type ListRoleAliasesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListRoleAliasesRequest struct {
	QueryParams ListRoleAliasesQueryParams
	Headers     ListRoleAliasesHeaders
}

type ListRoleAliasesResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ListRoleAliasesResponse     *shared.ListRoleAliasesResponse
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
