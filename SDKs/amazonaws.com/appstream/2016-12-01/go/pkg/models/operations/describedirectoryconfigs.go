package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDirectoryConfigsXAmzTargetEnum string

const (
	DescribeDirectoryConfigsXAmzTargetEnumPhotonAdminProxyServiceDescribeDirectoryConfigs DescribeDirectoryConfigsXAmzTargetEnum = "PhotonAdminProxyService.DescribeDirectoryConfigs"
)

type DescribeDirectoryConfigsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDirectoryConfigsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDirectoryConfigsRequest struct {
	Headers DescribeDirectoryConfigsHeaders
	Request shared.DescribeDirectoryConfigsRequest `request:"mediaType=application/json"`
}

type DescribeDirectoryConfigsResponse struct {
	ContentType                    string
	DescribeDirectoryConfigsResult *shared.DescribeDirectoryConfigsResult
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
