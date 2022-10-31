package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeIdentityPoolUsagePathParams struct {
	IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
}

type DescribeIdentityPoolUsageHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeIdentityPoolUsageRequest struct {
	PathParams DescribeIdentityPoolUsagePathParams
	Headers    DescribeIdentityPoolUsageHeaders
}

type DescribeIdentityPoolUsageResponse struct {
	ContentType                       string
	DescribeIdentityPoolUsageResponse *shared.DescribeIdentityPoolUsageResponse
	InternalErrorException            *interface{}
	InvalidParameterException         *interface{}
	NotAuthorizedException            *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
}
