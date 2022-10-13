package operations

import (
	"openapi/pkg/models/shared"
)

type ListAliasesQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAliasesXAmzTargetEnum string

const (
	ListAliasesXAmzTargetEnumGameLiftListAliases ListAliasesXAmzTargetEnum = "GameLift.ListAliases"
)

type ListAliasesHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAliasesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAliasesRequest struct {
	QueryParams ListAliasesQueryParams
	Headers     ListAliasesHeaders
	Request     shared.ListAliasesInput `request:"mediaType=application/json"`
}

type ListAliasesResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	ListAliasesOutput        *shared.ListAliasesOutput
	StatusCode               int64
	UnauthorizedException    *interface{}
}
