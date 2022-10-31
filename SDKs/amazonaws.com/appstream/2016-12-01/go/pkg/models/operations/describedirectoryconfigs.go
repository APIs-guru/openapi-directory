package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDirectoryConfigsXAmzTargetEnum string

const (
	DescribeDirectoryConfigsXAmzTargetEnumPhotonAdminProxyServiceDescribeDirectoryConfigs DescribeDirectoryConfigsXAmzTargetEnum = "PhotonAdminProxyService.DescribeDirectoryConfigs"
)

type DescribeDirectoryConfigsHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDirectoryConfigsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
