package operations

import (
	"openapi/pkg/models/shared"
)

type ListVirtualNodesPathParams struct {
	MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
}

type ListVirtualNodesQueryParams struct {
	Limit     *int64  `queryParam:"style=form,explode=true,name=limit"`
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListVirtualNodesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListVirtualNodesRequest struct {
	PathParams  ListVirtualNodesPathParams
	QueryParams ListVirtualNodesQueryParams
	Headers     ListVirtualNodesHeaders
}

type ListVirtualNodesResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	ListVirtualNodesOutput       *shared.ListVirtualNodesOutput
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
