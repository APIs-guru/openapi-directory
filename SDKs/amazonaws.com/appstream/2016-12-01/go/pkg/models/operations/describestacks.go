package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStacksXAmzTargetEnum string

const (
	DescribeStacksXAmzTargetEnumPhotonAdminProxyServiceDescribeStacks DescribeStacksXAmzTargetEnum = "PhotonAdminProxyService.DescribeStacks"
)

type DescribeStacksHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStacksXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeStacksRequest struct {
	Headers DescribeStacksHeaders
	Request shared.DescribeStacksRequest `request:"mediaType=application/json"`
}

type DescribeStacksResponse struct {
	ContentType               string
	DescribeStacksResult      *shared.DescribeStacksResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
