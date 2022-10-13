package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePortalPathParams struct {
	PortalID string `pathParam:"style=simple,explode=false,name=portalId"`
}

type DescribePortalHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribePortalRequest struct {
	PathParams DescribePortalPathParams
	Headers    DescribePortalHeaders
}

type DescribePortalResponse struct {
	ContentType               string
	DescribePortalResponse    *shared.DescribePortalResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
