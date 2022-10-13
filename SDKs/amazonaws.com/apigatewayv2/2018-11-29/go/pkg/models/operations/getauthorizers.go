package operations

import (
	"openapi/pkg/models/shared"
)

type GetAuthorizersPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type GetAuthorizersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetAuthorizersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAuthorizersRequest struct {
	PathParams  GetAuthorizersPathParams
	QueryParams GetAuthorizersQueryParams
	Headers     GetAuthorizersHeaders
}

type GetAuthorizersResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetAuthorizersResponse   *shared.GetAuthorizersResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
