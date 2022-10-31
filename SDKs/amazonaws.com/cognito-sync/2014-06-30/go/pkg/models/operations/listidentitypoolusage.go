package operations

import (
	"openapi/pkg/models/shared"
)

type ListIdentityPoolUsageQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListIdentityPoolUsageHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
