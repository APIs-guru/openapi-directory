package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeVirtualGatewayPathParams struct {
	MeshName           string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualGatewayName string `pathParam:"style=simple,explode=false,name=virtualGatewayName"`
}

type DescribeVirtualGatewayQueryParams struct {
	MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
}

type DescribeVirtualGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeVirtualGatewayRequest struct {
	PathParams  DescribeVirtualGatewayPathParams
	QueryParams DescribeVirtualGatewayQueryParams
	Headers     DescribeVirtualGatewayHeaders
}

type DescribeVirtualGatewayResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DescribeVirtualGatewayOutput *shared.DescribeVirtualGatewayOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
