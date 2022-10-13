package operations

import (
	"openapi/pkg/models/shared"
)

type ListResolversPathParams struct {
	APIID    string `pathParam:"style=simple,explode=false,name=apiId"`
	TypeName string `pathParam:"style=simple,explode=false,name=typeName"`
}

type ListResolversQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListResolversHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListResolversRequest struct {
	PathParams  ListResolversPathParams
	QueryParams ListResolversQueryParams
	Headers     ListResolversHeaders
}

type ListResolversResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	InternalFailureException *interface{}
	ListResolversResponse    *shared.ListResolversResponse
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
