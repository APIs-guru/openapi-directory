package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMeshPathParams struct {
	MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
}

type DescribeMeshHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeMeshRequest struct {
	PathParams DescribeMeshPathParams
	Headers    DescribeMeshHeaders
}

type DescribeMeshResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DescribeMeshOutput           *shared.DescribeMeshOutput
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
