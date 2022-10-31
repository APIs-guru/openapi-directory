package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProjectPathParams struct {
	ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
}

type DescribeProjectHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeProjectRequest struct {
	PathParams DescribeProjectPathParams
	Headers    DescribeProjectHeaders
}

type DescribeProjectResponse struct {
	ContentType               string
	DescribeProjectResponse   *shared.DescribeProjectResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
