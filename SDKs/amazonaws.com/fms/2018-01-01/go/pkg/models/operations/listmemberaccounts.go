package operations

import (
	"openapi/pkg/models/shared"
)

type ListMemberAccountsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListMemberAccountsXAmzTargetEnum string

const (
	ListMemberAccountsXAmzTargetEnumAwsfms20180101ListMemberAccounts ListMemberAccountsXAmzTargetEnum = "AWSFMS_20180101.ListMemberAccounts"
)

type ListMemberAccountsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListMemberAccountsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListMemberAccountsRequest struct {
	QueryParams ListMemberAccountsQueryParams
	Headers     ListMemberAccountsHeaders
	Request     shared.ListMemberAccountsRequest `request:"mediaType=application/json"`
}

type ListMemberAccountsResponse struct {
	ContentType                string
	InternalErrorException     *interface{}
	ListMemberAccountsResponse *shared.ListMemberAccountsResponse
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
