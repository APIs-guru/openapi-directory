package operations

import (
	"openapi/pkg/models/shared"
)

type ListIdentityPoolUsageQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListIdentityPoolUsageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListIdentityPoolUsageRequest struct {
	QueryParams ListIdentityPoolUsageQueryParams
	Headers     ListIdentityPoolUsageHeaders
}

type ListIdentityPoolUsageResponse struct {
	ContentType                   string
	InternalErrorException        *interface{}
	InvalidParameterException     *interface{}
	ListIdentityPoolUsageResponse *shared.ListIdentityPoolUsageResponse
	NotAuthorizedException        *interface{}
	StatusCode                    int64
	TooManyRequestsException      *interface{}
}
