package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAccessPolicyPathParams struct {
	AccessPolicyID string `pathParam:"style=simple,explode=false,name=accessPolicyId"`
}

type DescribeAccessPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeAccessPolicyRequest struct {
	PathParams DescribeAccessPolicyPathParams
	Headers    DescribeAccessPolicyHeaders
}

type DescribeAccessPolicyResponse struct {
	ContentType                  string
	DescribeAccessPolicyResponse *shared.DescribeAccessPolicyResponse
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
