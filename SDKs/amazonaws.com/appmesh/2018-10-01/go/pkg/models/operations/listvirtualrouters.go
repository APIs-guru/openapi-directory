package operations

import (
	"openapi/pkg/models/shared"
)

type ListVirtualRoutersPathParams struct {
	MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
}

type ListVirtualRoutersQueryParams struct {
	Limit     *int64  `queryParam:"style=form,explode=true,name=limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListVirtualRoutersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListVirtualRoutersRequest struct {
	PathParams  ListVirtualRoutersPathParams
	QueryParams ListVirtualRoutersQueryParams
	Headers     ListVirtualRoutersHeaders
}

type ListVirtualRoutersResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	ListVirtualRoutersOutput     *shared.ListVirtualRoutersOutput
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
