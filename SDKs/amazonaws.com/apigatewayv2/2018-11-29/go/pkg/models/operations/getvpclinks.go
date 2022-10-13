package operations

import (
	"openapi/pkg/models/shared"
)

type GetVpcLinksQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetVpcLinksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetVpcLinksRequest struct {
	QueryParams GetVpcLinksQueryParams
	Headers     GetVpcLinksHeaders
}

type GetVpcLinksResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetVpcLinksResponse      *shared.GetVpcLinksResponse
	StatusCode               int64
	TooManyRequestsException *interface{}
}
