package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeVirtualServicePathParams struct {
	MeshName           string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualServiceName string `pathParam:"style=simple,explode=false,name=virtualServiceName"`
}

type DescribeVirtualServiceQueryParams struct {
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
}

type DescribeVirtualServiceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeVirtualServiceRequest struct {
	PathParams  DescribeVirtualServicePathParams
	QueryParams DescribeVirtualServiceQueryParams
	Headers     DescribeVirtualServiceHeaders
}

type DescribeVirtualServiceResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DescribeVirtualServiceOutput *shared.DescribeVirtualServiceOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
