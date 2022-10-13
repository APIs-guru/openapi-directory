package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeVirtualNodePathParams struct {
	MeshName        string `pathParam:"style=simple,explode=false,name=meshName"`
	VirtualNodeName string `pathParam:"style=simple,explode=false,name=virtualNodeName"`
}

type DescribeVirtualNodeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeVirtualNodeRequest struct {
	PathParams DescribeVirtualNodePathParams
	Headers    DescribeVirtualNodeHeaders
}

type DescribeVirtualNodeResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DescribeVirtualNodeOutput    *shared.DescribeVirtualNodeOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
