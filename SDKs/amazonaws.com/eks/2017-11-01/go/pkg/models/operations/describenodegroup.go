package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeNodegroupPathParams struct {
	Name          string `pathParam:"style=simple,explode=false,name=name"`
	NodegroupName string `pathParam:"style=simple,explode=false,name=nodegroupName"`
}

type DescribeNodegroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeNodegroupRequest struct {
	PathParams DescribeNodegroupPathParams
	Headers    DescribeNodegroupHeaders
}

type DescribeNodegroupResponse struct {
	ClientException             *interface{}
	ContentType                 string
	DescribeNodegroupResponse   *shared.DescribeNodegroupResponse
	InvalidParameterException   *interface{}
	ResourceNotFoundException   *interface{}
	ServerException             *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
