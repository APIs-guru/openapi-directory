package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeVirtualRouterPathParams struct {
	MeshName          string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualRouterName string `pathParam:"style=simple,explode=false,name=virtualRouterName"`
}

type DescribeVirtualRouterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeVirtualRouterRequest struct {
	PathParams DescribeVirtualRouterPathParams
	Headers    DescribeVirtualRouterHeaders
}

type DescribeVirtualRouterResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DescribeVirtualRouterOutput  *shared.DescribeVirtualRouterOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
