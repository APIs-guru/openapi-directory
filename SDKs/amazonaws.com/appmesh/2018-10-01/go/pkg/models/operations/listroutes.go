package operations

import (
	"openapi/pkg/models/shared"
)

type ListRoutesPathParams struct {
	MeshName          string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualRouterName string `pathParam:"style=simple,explode=false,name=virtualRouterName"`
}

type ListRoutesQueryParams struct {
	Limit     *int64  `queryParam:"style=form,explode=true,name=limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListRoutesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListRoutesRequest struct {
	PathParams  ListRoutesPathParams
	QueryParams ListRoutesQueryParams
	Headers     ListRoutesHeaders
}

type ListRoutesResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	ListRoutesOutput             *shared.ListRoutesOutput
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
