package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProjectPathParams struct {
	ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
}

type DescribeProjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
