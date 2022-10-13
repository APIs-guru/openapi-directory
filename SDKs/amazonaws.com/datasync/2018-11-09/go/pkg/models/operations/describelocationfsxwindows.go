package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLocationFsxWindowsXAmzTargetEnum string

const (
	DescribeLocationFsxWindowsXAmzTargetEnumFmrsServiceDescribeLocationFsxWindows DescribeLocationFsxWindowsXAmzTargetEnum = "FmrsService.DescribeLocationFsxWindows"
)

type DescribeLocationFsxWindowsHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLocationFsxWindowsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLocationFsxWindowsRequest struct {
	Headers DescribeLocationFsxWindowsHeaders
	Request shared.DescribeLocationFsxWindowsRequest `request:"mediaType=application/json"`
}

type DescribeLocationFsxWindowsResponse struct {
	ContentType                        string
	DescribeLocationFsxWindowsResponse *shared.DescribeLocationFsxWindowsResponse
	InternalException                  *interface{}
	InvalidRequestException            *interface{}
	StatusCode                         int64
}
