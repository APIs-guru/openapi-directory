package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeIdentityUsagePathParams struct {
	IdentityID     string `pathParam:"style=simple,explode=false,name=IdentityId"`
	IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
}

type DescribeIdentityUsageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeIdentityUsageRequest struct {
	PathParams DescribeIdentityUsagePathParams
	Headers    DescribeIdentityUsageHeaders
}

type DescribeIdentityUsageResponse struct {
	ContentType                   string
	DescribeIdentityUsageResponse *shared.DescribeIdentityUsageResponse
	InternalErrorException        *interface{}
	InvalidParameterException     *interface{}
	NotAuthorizedException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	TooManyRequestsException      *interface{}
}
