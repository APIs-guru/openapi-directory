package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIMappingsPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type GetAPIMappingsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetAPIMappingsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAPIMappingsRequest struct {
	PathParams  GetAPIMappingsPathParams
	QueryParams GetAPIMappingsQueryParams
	Headers     GetAPIMappingsHeaders
}

type GetAPIMappingsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetAPIMappingsResponse   *shared.GetAPIMappingsResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
